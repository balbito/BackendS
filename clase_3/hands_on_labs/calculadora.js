function dividir(numero1, numero2) {
    return new Promise((resolve, reject) => {
        if (numero2 === 0) {
            reject("No se puede dividir por 0");
        } else {
            resolve(numero1 / numero2);
        }
    });
}

function suma(numero1, numero2) {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) {
            reject("Operacion innecesaria");
        } else {
            const resultado = numero1 + numero2;
            resolve(resultado);
        }
    });
}

function resta(numero1, numero2) {
    return new Promise((resolve, reject) => {
        if (numero1 === 0 || numero2 === 0) {
            reject("Operacion innecesaria");
        } else {
            const resultado = numero1 - numero2;
            if (resultado <= 0) {
                reject("La calculadora solo devuelve numeros positivos")
            } else {
                resolve(resultado);
            }

        }
    });
}

function multiplicar(numero1, numero2) {
    return new Promise((resolve, reject) => {
        if (numero1 < 0 || numero2 < 0) {
            reject("Operacion innecesaria");
        } else {
            const resultado = numero1 * numero2;

            if (resultado < 0) {
                reject("La calculadora solo devuelve numeros positivos")
            } else {
                resolve(resultado);
            }
        }
    });
}

async function calculos (numero1, numero2) {
    try {
        const resultadoSuma = await suma(numero1, numero2);
        console.log(resultadoSuma);

        const resultadoResta = await resta(numero1, numero2);
        console.log(resultadoResta);

        const resultadoMultiplicar = await multiplicar(numero1, numero2);
        console.log(resultadoMultiplicar);

        const resultadoDividir = await dividir(numero1, numero2);
        console.log(resultadoDividir);
    } catch (error) {
        console.log(error);
    }
}


// calculos(2, 3);
// calculos(0, 3);
// calculos(2, 0);
calculos(6, 3);