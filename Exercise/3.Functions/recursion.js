function isEvenOld(N) {
  if (N == 0) {
    return true;
  } else if (N == 1) {
    return false;
  } else {
    return isEven(N - 2);
  }
}

//I add a version to accept both positive and negative whole number argument
function isEvenOld2(N) {
  if (N >= 0) {
    if (N == 0) {
      return true;
    } else if (N == 1) {
      return false;
    } else {
      return isEven(N - 2);
    }
  } else {
    if (N == -1) {
      return false;
    } else if (N == -2) {
      return true;
    } else {
      return isEven(N + 2);
    }
  }
}

// I update the solution to a clearer way with less lines.
function isEven(num) {
  if (num === 0) return true;
  else if (num === 1) return false;
  else if (num < 0) return isEven(-num);
  else return isEven(num - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-16));
