import 'dart:math';
import 'dart:html';

class TurtleFlag {
  Point position;
  num angle;
  num width;
  List<num> color;

  TurtleFlag(this.position, this.angle, this.color, this.width);
}

class Turtle {
  Point position;
  num angle;
  num width;
  List<num> color;
  List<TurtleFlag> flags;
  CanvasElement canvas;
  CanvasRenderingContext2D context;

  Turtle(this.position, this.angle, this.canvas,
      {this.width: 1, List<num> color: const [0, 0, 0]}) {
    context = canvas.context2D..beginPath();
    with_color(color);
    flags = [];
  }

  void move(num distance) {
    context.moveTo(position.x, position.y);
    position += Point(cos(angle), sin(angle)) * distance;
    context
      ..lineWidth = width
      ..lineTo(position.x, position.y)
      ..strokeStyle =
          "rgb(${this.color[0]}, ${this.color[1]}, ${this.color[2]})";
    draw();
  }

  void turn(num radians) {
    angle += radians;
  }

  void turn_degrees(num degrees) {
    angle += degrees * pi / 180;
  }

  void with_width(num px)  {
    width = px.clamp(0, double.infinity);
  }

  void scale_line_width(num px) {
    width += px.clamp(1 - width, double.infinity);
  }

  void step_color(List<num> color) {
    with_color(List.generate(3, (i) => (this.color[i] + color[i]).clamp(0, 255)));
  }

  void with_color(List<num> color) {
    if (color.length != 3)
      throw Exception("Color $color does not have three values");
    this.color = color.map((i) => i.clamp(0, 255)).toList();
  }

  void placeFlag() {
    flags.add(TurtleFlag(position * 1, angle, List.from(color), width));
  }

  void revertToFlag() {
    final flag = flags.removeLast();
    position = flag.position;
    angle = flag.angle;
    with_color(flag.color);
    width = flag.width;
  }

  void with_scale(num x, num y) {
    context.scale(x, y);
  }

  void draw() {
    context
      ..closePath()
      ..stroke()
      ..beginPath();
  }

  void clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
}

class LSystemExecuter {
  LSystem l;
  Map<String, Function()> commands;
  Function() startCommand, exitCommand;

  LSystemExecuter(this.l, this.commands, {this.startCommand, this.exitCommand});

  LSystemExecuter.normal(this.l, Turtle turtle, num angle, num distance,
      {bool deg: false,
      num widthGradientScale: 0,
      num alternateWidth: 1,
      List<num> colorGradientStep: const [0, 0, 0],
      List<num> alternateColor: const [0, 0, 0]}) {
    if (deg) angle *= pi / 180;
    startCommand = turtle.clear;
    exitCommand = turtle.draw;
    commands = {
      "F": () => turtle.move(distance),
      "G": () => turtle.move(distance),
      "H": () {
        turtle.step_color(colorGradientStep);
        turtle.move(distance);
      },
      "K": () {
        turtle.step_color(colorGradientStep.map((c) => -c).toList());
        turtle.move(distance);
      },
      "J": () {
        turtle.with_color(alternateColor);
        turtle.move(distance);
      },
      "^": () => turtle.with_color(alternateColor),
      "-": () => turtle.turn(-angle),
      "+": () => turtle.turn(angle),
      "|": () => turtle.turn(pi),
      ">": () => turtle.step_color(colorGradientStep),
      "<": () => turtle.step_color(colorGradientStep.map((c) => -c).toList()),
      "[": turtle.placeFlag,
      "]": turtle.revertToFlag,
      "*": () => turtle.with_width(alternateWidth),
      "/": () => turtle.scale_line_width(widthGradientScale),
      "\\": () => turtle.scale_line_width(1 / widthGradientScale),
    };
  }

  void run() {
    if (startCommand != null) startCommand();
    for (var i = 0; i < l.axiom.length; ++i) {
      final command = commands[l.axiom[i]];
      if (command != null) command();
    }
    if (exitCommand != null) exitCommand();
  }
}

typedef String Production();

class LSystem {
  String axiom;
  Map<RegExp, Production> productions;
  int expansion;

  LSystem(this.axiom, Map<String, String> productions) {
    expansion = 0;
    this.productions =
        productions.map((k, v) => MapEntry(RegExp(RegExp.escape(k)), () => v));
  }

  LSystem.specificProductions(this.axiom, Map<String, Production> productions) {
    expansion = 0;
    this.productions =
        productions.map((k, v) => MapEntry(RegExp(RegExp.escape(k)), v));
  }

  /// [chance, key, value]
  LSystem.stochastic(this.axiom, List<List> productions) {
    expansion = 0;
    this.productions = {};
    for (final production in productions) {
      final potentialProductions = productions
          .where((p) => p[1] == production[1])
          .toList()
            ..sort((a, b) => a[0].compareTo(b[0]));
      this.productions[RegExp(RegExp.escape(production[1]))] = () {
        final random = Random().nextDouble();
        num sumRandom = 0;
        for (final potentialProduction in potentialProductions) {
          sumRandom += potentialProduction[0];
          if (random < sumRandom) return potentialProduction[2];
        }
        return potentialProductions.last[2];
      };
    }
  }

  void expand() {
    expansion += 1;
    final successors = List.generate(axiom.length, (i) => axiom[i]);
    for (final production in productions.entries) {
      for (final match in production.key.allMatches(this.axiom)) {
        successors.replaceRange(match.start, match.end, [production.value()]);
        successors.insertAll(
            match.start + 1, List.filled(match.end - match.start - 1, ""));
      }
    }
    this.axiom = successors.fold("", (a, b) => a + b);
  }

  void expandn(int n) {
    for (var i = 0; i <= n; ++i) this.expand();
  }
}

const URL_UNSAFE_CHARS = {
  " ": "20",
  "\"": "22",
  ">": "3C",
  "<": "3E",
  "#": "23",
  "%": "25",
  "{": "7B",
  "}": "7D",
  "|": "7C",
  "\\": "5C",
  "^": "5E",
  "~": "7E",
  "[": "5B",
  "]": "5D",
  "`": "60",
};

String urlEncode(String url) {
  for (final encode in URL_UNSAFE_CHARS.entries)
    url = url.replaceAll(encode.key, "%${encode.value}");
  return url;
}

String urlDecode(String url) {
  for (final encode in URL_UNSAFE_CHARS.entries)
    url = url.replaceAll("%${encode.value}", encode.key);
  return url;
}

void main() {
  // Parse query
  List<String> rawQuery;
  try {
    rawQuery = window.location.search
        .substring(1)
        .replaceAll("%5B", "[")
        .replaceAll("%5D", "]")
        .replaceAll("%7C", "|")
        .split('&');
  } catch (e) {
    rawQuery = [];
  }
  final query = Map.fromEntries(List.generate(rawQuery.length, (i) {
    final pair = rawQuery[i].split('=');
    return MapEntry(pair.first, pair.last);
  }));

  // Setup rendering
  final canvas = CanvasElement(width: 1000, height: 1000)
    ..style.border = "black 2px solid";
  final turtleDefualtPosition = Point<num>(500, 500);
  final turtleDefaultAngle = -pi / 2;
  final turtle = Turtle(turtleDefualtPosition * 1, turtleDefaultAngle, canvas);

  // Setup ui for lsystem
  final axiomInput = InputElement()..value = query["axiom"] ?? "";
  final angleInput = InputElement(type: "number")
    ..style.width = "40px"
    ..value = query["angle"] ?? "";
  final defaultColorInput = InputElement(type: "color")
    ..value = "#${query["default"]}" ?? "";
  final colorGradientInput = InputElement(type: "color")
    ..value = "#${query["grad"]}" ?? "";
  final colorGradientDirectionInput = SpanElement()
    ..children = List.generate(
        3,
        (i) => InputElement(type: "checkbox")
          ..checked = (query["gradDir$i"] ?? "1") == "-1");
  final queryProductions =
      query["prods"]?.split(",")?.map((p) => p.split(";")) ?? [];
  final productionInput = DivElement()
    ..children.addAll(queryProductions.map((production) => DivElement()
      ..children = [
        InputElement()
          ..style.width = "30px"
          ..value = production[0],
        InputElement()..value = production[1],
        InputElement()
          ..style.width = "200px"
          ..value = production[2],
        ButtonElement()
          ..text = "-"
          ..onClick.listen((e) => (e.target as Element).parent.remove()),
      ]));
  final newProductionButton = ButtonElement()
    ..text = "+"
    ..onClick.listen((_) => productionInput.children.add(DivElement()
      ..children = [
        InputElement()
          ..style.width = "30px"
          ..value = "1",
        InputElement(),
        InputElement()..style.width = "200px",
        ButtonElement()
          ..text = "-"
          ..onClick.listen((e) => (e.target as Element).parent.remove()),
      ]));
  final iterationInput = InputElement(type: "number")
    ..style.width = "30px"
    ..value = query["n"] ?? "";
  LSystemExecuter executor;
  List<List> productions = [];
  final shareButton = ButtonElement()
    ..text = "share"
    ..onClick.listen((_) {
      final shareUrl = window.location.protocol +
          "//" +
          window.location.host +
          window.location.pathname +
          "?" +
          ({
            "grad": colorGradientInput.value.substring(1),
            "default": defaultColorInput.value.substring(1),
            "axiom": axiomInput.value,
            "angle": angleInput.value,
            "n": iterationInput.value,
            "prods": productions
                .map((p) => p.join(";"))
                .join(",")
                .replaceAll("[", "%5B")
                .replaceAll("]", "%5D")
                .replaceAll("|", "%7C"),
            "run": "true",
            "dist": query["dist"] ?? "5",
          }..addEntries(List.generate(
                  colorGradientDirectionInput.children.length,
                  (i) => MapEntry(
                      "gradDir$i",
                      (colorGradientDirectionInput.children[i] as InputElement)
                              .checked
                          ? "-1"
                          : "1"))))
              .entries
              .map((query) => "${query.key}=${query.value}")
              .join("&");
      final copyElement = SpanElement()..text = shareUrl;
      document.body.children.add(copyElement);
      window.getSelection().selectAllChildren(copyElement);
      document.execCommand("copy");
      copyElement.remove();
      window.alert("Copied sharable link to clipboard");
    });
  final runButton = ButtonElement()
    ..text = "run"
    ..onClick.listen((_) {
      turtle.angle = turtleDefaultAngle;
      turtle.position = turtleDefualtPosition * 1;
      turtle.with_color(List.from(List.generate(
          3,
          (i) => int.parse(
              defaultColorInput.value.substring(i * 2 + 1, i * 2 + 3),
              radix: 16))));
      productions = List.generate(
          productionInput.children.length,
          (i) => [
                double.tryParse((productionInput.children[i].children[0]
                            as InputElement)
                        .value) ??
                    1,
                (productionInput.children[i].children[1] as InputElement).value,
                (productionInput.children[i].children[2] as InputElement).value
              ]);
      final system = LSystem.stochastic(axiomInput.value, productions)
        ..expandn(int.parse(iterationInput.value));
      final angle = int.tryParse(angleInput.value) ?? 25;
      executor = LSystemExecuter.normal(system, turtle,
          angle == -1 ? 25 : angle, double.tryParse(query["dist"] ?? "5") ?? 5,
          colorGradientStep: List.generate(
              3,
              (i) =>
                  int.parse(
                      colorGradientInput.value.substring(i * 2 + 1, i * 2 + 3),
                      radix: 16) *
                  ((colorGradientDirectionInput.children[i] as InputElement).checked
                      ? -1
                      : 1)),
          alternateColor: List.generate(
              3,
              (i) => int.parse(
                  defaultColorInput.value.substring(i * 2 + 1, i * 2 + 3),
                  radix: 16)),
          deg: true)
        ..run();
      print(system.axiom.length);
    });
  // Drag render around
  var mouseDown = false;
  canvas
    ..onMouseDown.listen((e) {
      mouseDown = true;
    })
    ..onMouseUp.listen((_) => mouseDown = false)
    ..onMouseMove.listen((e) {
      if (mouseDown) {
        turtle.position = e.client -
            canvas.offsetTo(document.body) +
            Point(window.pageXOffset ?? 0, window.pageYOffset ?? 0);
        turtle.angle = turtleDefaultAngle;
        turtle.with_color(List.from(List.generate(
            3,
            (i) => int.parse(
                defaultColorInput.value.substring(i * 2 + 1, i * 2 + 3),
                radix: 16))));
        executor.run();
      }
    });
  if (query["run"] == "true") runButton.click();
  document.body.children.add(DivElement()
    ..children = [
      SpanElement()..text = "LSystem rules:",
      BRElement(),
      SpanElement()..text = "axiom* ",
      axiomInput,
      BRElement(),
      SpanElement()..text = "angle ",
      angleInput,
      BRElement(),
      SpanElement()..text = "default color ",
      defaultColorInput,
      BRElement(),
      SpanElement()..text = "color gradient step ",
      colorGradientInput,
      colorGradientDirectionInput,
      BRElement(),
      SpanElement()..text = "productions* ",
      newProductionButton,
      productionInput,
      SpanElement()..text = "iteration* ",
      iterationInput,
      BRElement(),
      runButton,
      shareButton,
      BRElement(),
      canvas,
    ]
    ..style.marginLeft = "10px");
}
