function f(bin1, bin2) {
    let dif = Math.abs(bin1.length - bin2.length);
    if(bin1.length > bin2.length){
        for(let i = 0; i < dif; i++){
            bin2.unshift(0);
        }
    }
    else{
        for(let i = 0; i < dif; i++){
            bin1.unshift(0);
        }
    }
    console.log(" " + bin1.join([]) + "\n+\n " + bin2.join([]));
    let result = [];
    let sum = 0;
    let i = bin1.length - 1;
    let carry = 0;
    while(i >= 0){
        sum = bin1[i] + bin2[i] + carry;
        if(sum > 1){
            result.unshift(sum % 2);
            carry = 1;
        } else {
            result.unshift(sum);
            carry = 0;
        }
        i--;
    }
    return result.join('');
}

    console.log('=' + f([0, 1, 0, 1], [0, 1, 1, 0]))


