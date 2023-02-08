let num1 = 10, num2 = 5.7;
let resultado;
let myStyle = "background: #0c690c;color: #fff;font-family: sans-serif;padding: 5px;border: 2px solid #0c6963;border-radius: 5px;";

resultado = num1 + num2;
console.log(`%cLa suma de 10 + 5.7 utilizando Math.round es: ${Math.round(resultado)} porque nos devuelve el valor de un número redondeado al número entero más cercano.`, myStyle);

//En el buscador de internet podemos encontrarlos con mdn

// Math.ceil(x)
// Devuelve el entero más pequeño mayor o igual que un número.

resultado = num1 + num2;
console.log(`%cLa suma de 10 + 5.7 utilizando Math.ceil es: ${Math.ceil(resultado)} porque nos devuelve el entero más pequeño mayor o igual que un número.`, myStyle);

// Math.floor(x)
// Devuelve el mayor entero menor que o igual a un número.

resultado = num1 + num2;
console.log(`%cLa suma de 10 + 5.7 utilizando Math.floor es: ${Math.floor(resultado)} porque nos devuelve el entero menor que o igual a un número.`, myStyle);

// Math.max()
// Devuelve el mayor de cero o más números.

resultado = num1 + num2;
console.log(`%cLa suma de 10 + 5.7 utilizando Math.max es: ${Math.max(resultado)} porque nos devuelve el mayor de cero o más números.`, myStyle);

// Math.min()
// Devuelve el más pequeño de cero o más números.

resultado = num1 + num2;
console.log(`%cLa suma de 10 + 5.7 utilizando Math.min es: ${Math.min(resultado)} porque nos devuelve el más pequeño de cero o más números.`, myStyle);

// Math.pow(x, y) 
// Las devoluciones de base a la potencia de exponente, que es, baseexponent.

console.log(`%cEjemplo utilizando Math.pow elevando 10 por 5.7 veces: ${Math.pow(num1,num2)} hace las devoluciones de base a la potencia de exponente, que es, baseexponent.    `, myStyle);

// Math.random()
// Devuelve un número pseudo-aleatorio entre 0 y 1.


// Math.sqrt(x)
// Devuelve la raíz cuadrada positiva de un número.

console.log(`%cEjemplo utilizando Math.sqrt calculando la raíz cuadrada de 10 que es: ${Math.sqrt(num1)} Cuando se utiliza Math.sqr se devuelve la raíz cuadrada positiva de un número. `, myStyle);

// Math.trunc(x)
// Devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios.

console.log(`%cEjemplo utilizando Math.trunc devolviendo la parte entera de 5.7 que es: ${Math.trunc(num2)} Cuando se utiliza Math.trunc se devuelve la parte entera del número x, la eliminación de los dígitos fraccionarios. `, myStyle);


