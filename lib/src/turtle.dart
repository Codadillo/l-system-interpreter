import 'dart:html';
import 'dart:math';

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
    width *= px.clamp(double.minPositive, double.infinity);
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
