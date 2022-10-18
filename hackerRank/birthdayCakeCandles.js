// 6) birthdayCakeCandles

function birthdayCakeCandles(arr) {

    const velas = arr.filter(value => Math.max(...arr) === value)
    console.log(velas, ' = ', velas.length);
    return velas.length;
}

function birthdayCakeCandles(candles) {
    // Write your code here
  let max = 0;
    
    candles.forEach(candle => candle > max ? max = candle : max); //find max number

    const result = candles.filter(candle => candle === max); //filter the same number as max
    
    return result.length;
}

const arr = [4, 4, 1, 3];

birthdayCakeCandles(arr);