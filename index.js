// function aVeryBigSum(ar){
//     // Write your code here
//     let array = [];
//     let sum = 0;
//     for(let i = 0; i <= ar[i]; i++) {
//        console.log(ar[i]);
//        sum += ar[i];
//     }
//     array.push(sum);
//     return array;
// }

// const numb = [
//      1000000001,
//      1000000002,
//      1000000003,
//      1000000004,
//      1000000005
//     ];

// console.log(aVeryBigSum(numb));


// function diagonalDifference(arr) {
//     // Write your code here
//     let diag1 = 0;
//     let diag2 = 0;
//     console.log(arr.length);
//     for (let i = 0; i < arr.length; i++ ) {
//         for (let j = 0; j < arr.length; j++) {
//             if (i === j) {
//                     diag1 += arr[i][j]  
//                     diag2 += arr[i][arr.length - (i + 1)];
//                     // console.log('DIAG ONE: ' ,arr[i][j], 'DIAG TWO: ', arr[i][arr.length - (i + 1)])
//                     break;  
//                 }
//         }
//     }
//     let result = Math.abs(diag1 - diag2);
//     console.log(result)
//     return result;
// }


// const array = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
//     ];

// diagonalDifference(array);


// Plus-Minus - 3

// function plusMinus(arr) {
//     // Write your code here
//     let positive = 0;
//     let negative = 0;
//     let zero = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (Math.sign(arr[i]) == 1) positive += 1;
//         if (Math.sign(arr[i]) == -1) negative += 1;
//         if (Math.sign(arr[i]) == 0) zero += 1;
//     }
//     // console.log('POSITIVE: ',positive);
//     // console.log('NEGATIVE: ',negative);
//     // console.log('ZERO: ',zero);

//     const fractionPositive = positive / arr.length;
//     const fractionNegative = negative / arr.length;
//     const fractionZero = zero / arr.length;
    
//     console.log(fractionPositive)
//     console.log(fractionNegative)
//     console.log(fractionZero)
// }

// const array = [1, 1, 0, -1, -1];

// plusMinus(array)





// Staircase

    function staircase(n) {
    
        // want to declare a variable that will hold the final output that we will print 
        let output = ''
        
        // outer for loop to keep track of the overall number of rows (n)
        for (let i = 1; i <= n; i++) {
        
            // inner for loop to keep track of the preceding spaces on each line
                // s should start out at n-1 which we can see from the pic I drew
                // s should be greater than or equal to i because the number of spaces decreases as i increases
                // decrease s bc the number of spaces decreases as i increases
            for (let s = n - 1; s >= i; s--) {
                output += ' '
            }
            
            // inner for loop to keep track of the #s on each line
                // h should start at one because the first line will always have one #
                // h should be less than or equal to the row that we are on since h will approach and eventually equal n
                // h increases since we increment h to equal i which will eventually equal n
            for (let h = 1; h <= i; h++) {
                output += '#'
            }
            // new line
            output += "\n"
           
        }
        // log the final result
        console.log(output)
    }

staircase(5)

// let n = 5;
// // External loop
// for (let i = 0; i < n; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(' ')
//   }
//   // printing star
//   for (let k = 0; k < 2 * (n-i) - 1; k++) {
//     process.stdout.write('*')
//   }
//   console.log();
// }

// ROBOT VIDEO https://cdn.dribbble.com/userupload/2741440/file/original-6b87468cb570ce9fb822ad6d8477fafc.m4v




// 5) MinMaxSum
// function miniMaxSum(arr) {
//     // Write your code here
//     let sum = arr.reduce((acc, current) => acc + current, 0);

//     const maxResult = sum - Math.min(...arr);
//     const minResult = sum - Math.max(...arr);

//     console.log(minResult, maxResult);
// }

// const arr = [1, 2, 3, 4, 5];

// miniMaxSum(arr);




// 6) birthdayCakeCandles

// function birthdayCakeCandles(arr) {

//     const velas = arr.filter(value => Math.max(...arr) === value)
//     console.log(velas, ' = ', velas.length);
//     return velas.length;
// }

// function birthdayCakeCandles(candles) {
//     // Write your code here
//   let max = 0;
    
//     candles.forEach(candle => candle > max ? max = candle : max); //find max number

//     const result = candles.filter(candle => candle === max); //filter the same number as max
    
//     return result.length;
// }

// const arr = [4, 4, 1, 3];

// birthdayCakeCandles(arr);


function timeConversion(s) {
    // Write your code here
    if (s.indexOf('PM') > -1) // then do smth with PM
    console.log(s.indexOf('PM') > -1);
    // const arr = s.slice(0,8).split(':');
    
    const arr = s.slice(0,8).split(':');

      arr[0] = (s.indexOf('PM') > -1) ?
         (arr[0] == 12 ? '12' : Number(arr[0]) + 12) 
         :
         (arr[0] == 12 ? '00' : arr[0]);

      return arr.join(':');

    // console.log(arr);

    // PM case
    // if( arr[0] == 12) {  // as 12 is the string I use ==, but you can rewrite it like === '12'
    //     arr[0] = '12';
    // } else {
    //     arr[0] = Number(arr[0]) + 12; // if we add number to string we will get new string like '1312'
    // }

    // AM case
    // if (arr[0] == 12) {
    //     arr[0] = '00';
    // }
    // In other cases AM is the same as 24h format

}

const str = '12:05:45PM';

timeConversion(str);


















// EJERCICIO DANIEL LOSADA: 

// Hay que retornar un array de números y si en ese array hay algún número que sea múltiplo de 3 entonces en vez de retornar el número debe retornar fizz, si es múltiplo de 5 retornar buzz y si es múltiplo de los dos que retorne fizzbuzz




// EJERCICIO DE EJEMPLO - TABLA DE MULTIPLICACION DE UN NUMERO - UN SOLO BUCLE - TABLA DE MULTIPLICACION

// for (let i = 1; i <= 10; i++) {
//     let resultado = i * i;
//     console.log(i + ' X ' + i + ' ES: ', resultado );
// }

// EJERCICIO DE EJEMPLO - TABLA DE MULTIPLICACION DE TODOS LOS NUMEROS - DOBLE BUCLE - TABLA DE MULTIPLICACION

// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++) {
//         let resultado = i * j;
//         console.log(i + ' X ' + j + ' ES: ', resultado );
//     }
// }










const arr = [[2,1,400], [8,6], [4,3], [9, 5]];

console.log('ARREGLO INICIAL - INPUT : ',arr)
const arreglarArreglo = (arreglo) => {
    var nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        for(let j = 0; j < arreglo[i].length; j++) {
            let arregloOrdenado = arreglo[i].sort()
            nuevoArreglo.push(arregloOrdenado[j])
        }
    }
    console.log('ARREGLO FINAL - OUTPUT : ', nuevoArreglo.sort((a, b) => a - b))
    return nuevoArreglo.sort();
}

arreglarArreglo(arr)












