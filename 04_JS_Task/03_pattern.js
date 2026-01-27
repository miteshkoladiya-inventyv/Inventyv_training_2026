function printPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += Math.min(i, j, n - 1 - i, n - 1 - j) + 1 + " ";
    }
    console.log(row);
  }
}
printPattern(5);
