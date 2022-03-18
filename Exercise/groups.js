class Group {
    constructor(){
        this.nums = [];
    }

    add(num){
        if(!this.has(num)){
            this.nums.push(num);
        }
    }

    delete(num){
            this.nums = this.nums.filter(el=>el !==num);
    }

    has(num){
        return this.nums.includes(num);
    }

    static from(arr){
        let group = new Group;
        for(let el of arr){
            group.add(el);
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