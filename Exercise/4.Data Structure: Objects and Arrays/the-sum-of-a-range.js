function range(start,end,step = start < end ? 1 : -1){
    let array = [];
    if(step>0){
        for(let i=start; i<=end; i+=step){
            array.push(i);
        }
    }else{
        for(let i=start; i>=end; i+=step){
            array.push(i);
        }
    }
    
    return array;
}

function sum(array){
    let total = 0;
    for(let num of array){
        total += num; 
    }
    return total;
}



console.log(range(1,10));
console.log(range(5, 2,-1));
console.log(sum(range(1,10)));