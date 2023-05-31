class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

// Using a recursion here to keep excute reliableMultiply() until not throwing the MultiplicatorUnitFailure error.
function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a, b);
    } else {
      throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64
