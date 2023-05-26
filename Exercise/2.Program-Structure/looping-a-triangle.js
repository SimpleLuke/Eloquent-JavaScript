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

triangleHash(6);
