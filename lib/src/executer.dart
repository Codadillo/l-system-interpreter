import 'dart:math';
import 'package:l_system_interpreter/l_system_interpreter.dart';

class LSystemExecuter {
  LSystem l;
  Map<String, Function> commands;
  Function() startCommand, exitCommand;

  LSystemExecuter(this.l, this.commands, {this.startCommand, this.exitCommand});

  LSystemExecuter.normal(this.l, Turtle turtle, num angle, num distance,
      {bool deg: false,
      num widthGradientScale: 2,
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

class ParametricLSystemExecuter extends LSystemExecuter {
  LSystem l;
  Map<String, Function> commands;
  Function() startCommand, exitCommand;

  ParametricLSystemExecuter(this.l, this.commands,
      {this.startCommand, this.exitCommand})
      : super(l, commands,
            startCommand: startCommand, exitCommand: exitCommand);

  ParametricLSystemExecuter.normal(
      this.l, Turtle turtle, num angle, num distance,
      {bool deg: false,
      num widthGradientScale: 2,
      num alternateWidth: 1,
      List<num> colorGradientStep: const [0, 0, 0],
      List<num> alternateColor: const [0, 0, 0]})
      : super(l, const {}) {
    if (deg) angle *= pi / 180;
    startCommand = turtle.clear;
    exitCommand = turtle.draw;
    commands = {
      "F": ([d]) => turtle.move(num.tryParse(d) ?? distance),
      "G": ([d]) => turtle.move(num.tryParse(d) ?? distance),
      "H": ([c, d]) {
        turtle.step_color(tryHexToRGB(c) ?? colorGradientStep);
        turtle.move(num.tryParse(d) ?? distance);
      },
      "K": ([c, d]) {
        turtle.step_color(
            (tryHexToRGB(c) ?? colorGradientStep).map((c) => -c).toList());
        turtle.move(num.tryParse(d) ?? distance);
      },
      "J": ([c, d]) {
        turtle.with_color(tryHexToRGB(c) ?? alternateColor);
        turtle.move(num.tryParse(d) ?? distance);
      },
      "^": ([c]) => turtle.with_color(tryHexToRGB(c) ?? alternateColor),
      "-": ([a]) {
        final input = num.tryParse(a);
        turtle.turn(-(input != null ? input * pi / 180 : angle));
      },
      "+": ([a]) {
        final input = num.tryParse(a);
        turtle.turn(input != null ? input * pi / 180 : angle);
      },
      "|": () => turtle.turn(pi),
      ">": ([c]) => turtle.step_color(tryHexToRGB(c) ?? colorGradientStep),
      "<": ([c]) => turtle.step_color(
          (tryHexToRGB(c) ?? colorGradientStep).map((c) => -c).toList()),
      "[": turtle.placeFlag,
      "]": turtle.revertToFlag,
      "*": ([w]) => turtle.with_width(num.tryParse(w) ?? alternateWidth),
      "/": ([w]) =>
          turtle.scale_line_width(num.tryParse(w) ?? widthGradientScale),
      "\\": ([w]) =>
          turtle.scale_line_width(1 / (num.tryParse(w) ?? widthGradientScale)),
    };
  }

  void run() {
    if (startCommand != null) startCommand();
    final axiom = l.axiom.runes.iterator;
    while (axiom.moveNext()) {
      final commandSymbol = axiom.currentAsString;
      print(commandSymbol);
      var parameters = "";
      axiom.moveNext();
      if (axiom.currentAsString != "(")
        axiom.movePrevious();
      else
        while (axiom.moveNext() && axiom.currentAsString != ")")
          parameters += axiom.currentAsString;
      final command = commands[commandSymbol];
      if (command != null)
        Function.apply(command, parameters.replaceAll("\s", "").split(","));
    }
    if (exitCommand != null) exitCommand();
  }
}
