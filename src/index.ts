/* Ejercicio: Potencias
• Realice un programa que devuelva la potencia de un número.
• La base y el exponente deben ser ingresados por teclado.
• Sólo deben admitirse exponentes mayores o iguales a cero.
• Recuerde que el resultado de un numero elevado a 0 es 1.
• Separe la lógica de calcular la potencia utilizando métodos.
*/

let baseIN: number = Number(prompt(`Ingreser Valor de la Base:`));
let exponenteIN: number = Number(prompt(`Ingreser valor del Exponente`));
let potencia: number = 0;

function caluarPotencia(base: number, exp: number): number {
  let resultado: number = 1;
  for (let i: number = 0; i < exp; i++) {
    resultado = resultado * base;
    console.log(resultado);
  }
  return resultado;
}

potencia = caluarPotencia(baseIN, exponenteIN);
console.log(`la potencia es: ${potencia}`);
