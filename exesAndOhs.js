function XO(str) {
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === "x" || letter === "X") {
      xCount++;
    } else if (letter === "o" || letter === "O") {
      oCount++;
    }
  }
  return xCount === oCount;
}