let num1 = 500, num2 = 32;
let resultado;
let myStyle = "background: #0c690c;color: #fff;font-family: sans-serif;padding: 5px;border: 2px solid #0c6963;border-radius: 5px;";


//Operador de adición 'Suma'

resultado = num1 + num2;
console.log(`%c${num1} + ${num2} = ${resultado}`, myStyle);

//Operador de sustracción 'Resta'

resultado = num1 - num2;
console.log(`%c${num1} - ${num2} = ${resultado}`, myStyle);

//Operador de división 

resultado = num1 / num2;
console.log(`%c${num1} / ${num2} = ${resultado}`, myStyle);

//Operador de Exponenciación 

resultado = num1 ** num2;
console.log(`%c${num1} ** ${num2} = ${resultado}`, myStyle);

//Operador de Multiplicación 

resultado = num1 * num2;
console.log(`%c${num1} * ${num2} = ${resultado}`, myStyle);

//Operador de Porcentaje

resultado = num1 % num2;
console.log(`%c${num1} % ${num2} = ${resultado}`, myStyle);

//Operador de Número Negativo

resultado = (-num1) + num2;
console.log(`%c${-num1} + ${num2} = ${resultado}`, myStyle);

