class GroupIterator {
  constructor(group) {
    this.group = group.members;
    this.index = 0;
  }

  next() {
    if (this.index === this.group.length) {
      return { done: true };
    }

    let value = this.group[this.index];

    this.index++;

    return { value, done: false };
  }
}

class Group {
  constructor() {
    this.members = [];
  }

  add(member) {
    if (!this.has(member)) {
      this.members.push(member);
    }
  }

  delete(member) {
    if (this.has(member)) {
      this.members.filter((el) => el !== member);
    }
  }

  has(member) {
    return this.members.includes(member);
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }

  static from(values) {
    const group = new Group();
    for (let val of values) {
      if (!group.has(val)) {
        group.add(val);
      }
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
