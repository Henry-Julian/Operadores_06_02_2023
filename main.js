let num1 = 10, num2 = 20;
let resultado;
let myStyle = "background: #0c690c;color: #fff;font-family: sans-serif;padding: 5px;border: 2px solid #0c6963;border-radius: 5px;";

//Operador de igualdad:

console.log(`%c El número 10 es igual a 20?. La operación se expresa así: ${num1} == ${num2}. El resultado es: ${num1==num2}`, myStyle);


//Operador de desigualdad:

console.log(`%c El número 10 es desigual a 20?. La operación se expresa así: ${num1} != ${num2}. El resultado es: ${num1!=num2}`, myStyle);


//Operador idéntico:

console.log(`%c El número 10 es idéntico a 20?. La operación se expresa así: ${num1} === ${num2}. El resultado es: ${num1===num2} porque 10 no es idéntico a 20 en valor pero su formato es int. Si en lugar de 20 estuviera un 10 no solamente serían iguales sino idénticos en este caso porque los dos números son int.`, myStyle);


//Operador no idéntico:

console.log(`%c El número 10 no es idéntico a 20?. La operación se expresa así: ${num1} !== ${num2}. El resultado es: ${num1!==num2} porque 10 no es idéntico a 20 en valor pero su formato es int. Si en lugar de 20 estuviera un 10 y aparte fuera un string serían iguales en valor pero no idénticos ya que el segundo 10 es de tipo string y el primero es un int.`, myStyle);


//Operador mayor que:

console.log(`%c El número 10 es mayor a 20?. La operación se expresa así: ${num1} > ${num2}. El resultado es: ${num1>num2}`, myStyle);


//Operador menor que:

console.log(`%c El número 10 es menor a 20?. La operación se expresa así: ${num1} < ${num2}. El resultado es: ${num1<num2}`, myStyle);


//Operador menor o igual que:

console.log(`%c El número 10 es menor o igual a 20?. La operación se expresa así: ${num1} <= ${num2}. El resultado es: ${num1<=num2} porque está en el rango que equivale a ser menor que el número 20. Si el número 10 tuviera el valor de 20 también el resultado sería true.`, myStyle);

