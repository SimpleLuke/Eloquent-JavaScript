function loop(num, testFn, updateFn, BodyFn) {
  while (testFn(num)) {
    BodyFn(num);
    num = updateFn(num);
  }
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
// → 3
// → 2
// → 1
