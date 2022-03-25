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



for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}