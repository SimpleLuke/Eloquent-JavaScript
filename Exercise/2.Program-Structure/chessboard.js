// This is close to the suggested solution, which the time complexity is O(n^2) if the size will change.
let size = 8;
let output = "";

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      output += " ";
    } else {
      output += "#";
    }
  }
  output += "\n";
}

console.log(output);

// Another solution I come up without nested loop which time complexity will be O(n) if the size would change.
function board(size) {
  let output = "";

  for (let i = 0; i < size * size + size; i++) {
    if (i % (size + 1) === 0) {
      output += "\n";
    } else if (i % 2 === 0) {
      output += "#";
    } else {
      output += " ";
    }
  }

  console.log(output);
}

console.log(board(8));
