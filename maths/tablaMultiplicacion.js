// EJERCICIO DE EJEMPLO - TABLA DE MULTIPLICACION DE UN NUMERO - UN SOLO BUCLE - TABLA DE MULTIPLICACION.

for (let i = 1; i <= 10; i++) {
    let resultado = i * i;
    console.log(i + ' X ' + i + ' ES: ', resultado );
}

// EJERCICIO DE EJEMPLO - TABLA DE MULTIPLICACION DE TODOS LOS NUMEROS - DOBLE BUCLE - TABLA DE MULTIPLICACION.

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let resultado = i * j;
        console.log(i + ' X ' + j + ' ES: ', resultado );
    }
}