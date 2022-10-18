// Plus-Minus - 3

function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) == 1) positive += 1;
        if (Math.sign(arr[i]) == -1) negative += 1;
        if (Math.sign(arr[i]) == 0) zero += 1;
    }
    // console.log('POSITIVE: ',positive);
    // console.log('NEGATIVE: ',negative);
    // console.log('ZERO: ',zero);

    const fractionPositive = positive / arr.length;
    const fractionNegative = negative / arr.length;
    const fractionZero = zero / arr.length;
    
    console.log(fractionPositive)
    console.log(fractionNegative)
    console.log(fractionZero)
}

const array = [1, 1, 0, -1, -1];

plusMinus(array)