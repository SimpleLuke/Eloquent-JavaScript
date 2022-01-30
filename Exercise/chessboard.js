function chessboard(size){
    for(let i=0; i<size; i++){
        let str = '';
        if(i%2==0){
            for(let j=0; j<size; j++){
                switch(str.charAt(str.length - 1)){
                    case ' ':
                        str += "#";
                        break;
                    case '#':
                    default:
                        str += " ";
                        break;
                }
            }
            console.log(str);
        }else{
            for(let j=0; j<size; j++){
                switch(str.charAt(str.length - 1)){
                    case '#':
                        str += " ";
                        break;
                    case ' ':
                    default:
                        str += "#";
                        break;
                }
            }
            console.log(str);
        }
    }
}

chessboard(10);
