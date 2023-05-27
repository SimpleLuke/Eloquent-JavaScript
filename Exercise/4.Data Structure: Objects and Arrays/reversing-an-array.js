function reverseArray(array) {
  let arr = [];
  for (let i = array.length - 1; i > -1; i--) {
    arr.push(array[i]);
  }
  return arr;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

// Another solultion with two pointers
function reverseArrayInPlace2(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let temp = array[right];
    array[right] = array[left];
    array[left] = temp;
    left++;
    right--;
  }

  return array;
}

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
