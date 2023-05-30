class PGroup {
  constructor(group) {
    this.group = group;
  }

  add(val) {
    if (this.has(val)) return this;
    const newGroup = [].concat(this.group).concat(val);
    return new PGroup(newGroup);
  }

  delete(val) {
    if (!this.has(val)) return this;
    const newGroup = this.group.filter((el) => el !== val);
    return new PGroup(newGroup);
  }

  has(val) {
    return this.group.includes(val);
  }

  static empty = new PGroup([]);
}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
