/// Hex in form of #......
List<int> hexToRGB(String hex) => List.generate(
    3, (i) => int.parse(hex.substring(i * 2 + 1, i * 2 + 3), radix: 16));

/// Hex in form of #......
/// can return null if fails
List<int> tryHexToRGB(String hex) { 
  try {
    return List.generate(
      3, (i) => int.parse(hex.substring(i * 2 + 1, i * 2 + 3), radix: 16));
  } catch(_) {
    return null;
  }
}
