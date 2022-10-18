// Calcular Maximo Comun Divisor de dos numeros enteros.

const calculateMCD = (a, b) => {
    let currentA = a;
    let currentB = b;
    let cociente = 0,
        residuo = 0;
    
    while ( currentA !== 0 && currentB !== 0 ) {
        cociente = Math.trunc(currentA / currentB);
        residuo = Math.trunc(currentA % currentB);
        console.log(`Podemos escribir esto como: ${currentA} = ${currentB} x ${cociente} + ${residuo}`);

        currentA = currentB;
        currentB = residuo;
    }

    if ( currentA === 0 ) {
        console.log(`El MCD de: ${a} y ${b} es: ${currentB}`);
        return b;
    }
    
    if ( currentB === 0 ) {
        console.log(`El MCD de: ${a} y ${b} es: ${currentA}`);
        return a;
    }

}

let numberA = Number(prompt('Introduce el primer entero:'));
let numberB = Number(prompt('Introduce el segundo entero:'));

calculateMCD(numberA, numberB);