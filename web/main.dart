import 'dart:math';
import 'dart:html';
import 'package:l_system_interpreter/l_system_interpreter.dart';

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
    rawQuery = urlDecode(window.location.search.substring(1)).split('&');
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
            "prods": urlEncode(productions.map((p) => p.join(";")).join(",")),
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
      executor = ParametricLSystemExecuter.normal(system, turtle,
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
