function inverseBi(numb){
    let result = [];
    for(let i = 0; i < numb.length; i++){

        if(numb[i] === 1){
            result[i] = 0;
        } else {
            result[i] = 1;
        }
    }
    return result.join('');
}
console.log(inverseBi([1, 1, 0, 0, 1]))