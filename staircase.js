// solution 1
function staircase(n = 6) {
  let output = "";

  for (let a = 1; a <= n; a++) {
    output += " ".repeat(n - a) + "#".repeat(a);
    output += "\n";
  }

  console.log(output);
}

function staircase2(n = 6) {
  let output = "";
  for (let a = 1; a <= n; a++) {
    for (let b = n - 1; b >= a; b--) {
      output += " ";
    }

    for (let c = 1; c <= a; c++) {
      output += "#";
    }

    output += "\n";
  }
  console.log(output);
}
