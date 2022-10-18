function diagonalDifference(arr) {
    // Write your code here
    let diag1 = 0;
    let diag2 = 0;
    console.log(arr.length);
    for (let i = 0; i < arr.length; i++ ) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                    diag1 += arr[i][j]  
                    diag2 += arr[i][arr.length - (i + 1)];
                    // console.log('DIAG ONE: ' ,arr[i][j], 'DIAG TWO: ', arr[i][arr.length - (i + 1)])
                    break;  
                }
        }
    }
    let result = Math.abs(diag1 - diag2);
    console.log(result)
    return result;
}


const array = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
    ];

diagonalDifference(array);