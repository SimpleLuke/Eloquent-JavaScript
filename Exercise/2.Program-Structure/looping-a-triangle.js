// function triangleHash(num){
//     for(let i=1; i<=num; i++){
//         console.log("#".repeat(i));
//     }
// }

function triangleHash(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += "#";
    console.log(result);
  }
}

triangleHash(7);

// The suggested solution is below:
// It simplify the program as it only requires to print a hash triangle with 7 # base.

for (let line = "#"; line.length < 8; line += "#") console.log(line);
