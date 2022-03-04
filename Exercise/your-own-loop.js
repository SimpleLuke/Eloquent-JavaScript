function loop(value, test, update, func){
    while(test(value)){
        func(value);
        value = update(value);
    }
}