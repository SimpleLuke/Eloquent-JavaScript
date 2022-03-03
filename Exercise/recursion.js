function isEvenOld(N){
    if(N==0){
        return true;
    }else if(N==1){
        return false;
    }else{
        return isEven(N-2);
    }
}

//I add a version to accept both positive and negative whole number argument
function isEven(N){
    if(N>=0){
        if(N==0){
            return true;
        }else if(N==1){
            return false;
        }else{
            return isEven(N-2);
        }
    }else{
        if(N==-1){
            return false;
        }else if(N==-2){
            return true;
        }else{
            return isEven(N+2);
        }
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-16));