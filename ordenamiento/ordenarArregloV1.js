// PT Daniel L
// Hay que retornar un array de números y si en ese array hay algún número que sea múltiplo de 3 entonces en vez de retornar el número debe retornar fizz, si es múltiplo de 5 retornar buzz y si es múltiplo de los dos que retorne fizzbuzz


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