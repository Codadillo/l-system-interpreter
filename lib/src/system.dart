import 'dart:math';

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
        var sumRandom = 0;
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