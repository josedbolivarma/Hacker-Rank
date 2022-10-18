// 5) MinMaxSum
function miniMaxSum(arr) {
    // Write your code here
    let sum = arr.reduce((acc, current) => acc + current, 0);

    const maxResult = sum - Math.min(...arr);
    const minResult = sum - Math.max(...arr);

    console.log(minResult, maxResult);
}

const arr = [1, 2, 3, 4, 5];

miniMaxSum(arr);