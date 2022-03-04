function flattening(array){
    return array.reduce((previous, current)=>{
        return previous.concat(current);
    })
}

console.log(flattening([[1, 2, 3], [4, 5], [6]]));