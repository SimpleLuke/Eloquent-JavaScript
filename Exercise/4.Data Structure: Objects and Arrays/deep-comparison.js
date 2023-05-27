function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    obj1 === null ||
    typeof obj1 !== "object" ||
    obj2 === null ||
    typeof obj2 !== "object"
  )
    return false;

  const keys1 = Object.keys(obj1),
    keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys1[key] == keys2[key] || !deepEqual(obj1[key], obj2[key]))
      return false;
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
