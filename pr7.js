
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
    console.log(" " + bin1 + "\n+\n " + bin2);
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
    return result;
}
function inverseBi(numb){
    let result = [];
    for(let i = 0; i < numb.length; i++){

        if(numb[i] === 1){
            result[i] = 0;
        } else {
            result[i] = 1;
        }
    }
    return result;
}

function fromPosToNeg(numb){
    let result = inverseBi(numb);
    result = f(result, [1]);
    return result;
}

let num = [1, 0, 0, 1, 1];
result = fromPosToNeg(num);
console.log('=' + " " + result.join(''));