function arrayToList(array) {
  let list = null;

  for (let i = array.length - 1; i > -1; i--) {
    list = { value: array[i], rest: list };
  }

  return list;
}

function listToArray(list) {
  const array = [];

  // While loop version
  // while(list !==null){
  //   array.push(list.value)
  //   list = list.rest
  // }

  // For loop version
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }

  return array;
}

function prepend(element, list) {
  return { value: element, rest: list };
}

// While loop version
function nth(list, number) {
  let count = 0;
  while (count < number) {
    list = list.rest;
    count++;
  }

  return list.value;
}

//Recursion version
function nth(list, number) {
  if (!list) return undefined;
  if (number === 0) return list.value;

  return nth(list.rest, number - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
