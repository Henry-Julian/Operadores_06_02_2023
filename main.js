// Operadores lógicos 

// Los Operadores lógicos  nos devuelve un resultado a 
// partir de que se cumpla (o no) una condición, 
// su resultado es Booleano, y sus operandos son 
// valores lógicos o asimilables a ellos

let a = confirm("Variable A\n\t\tSeleccione Aceptar si desea el booleano True\n\t\tSeleccione Cancelar si desea el booleano False")
let b = confirm("Variable B\n\t\tSeleccione Aceptar si desea el booleano True\n\t\tSeleccione Cancelar si desea el booleano False")

let cuerpo = document.querySelector("#myAND");
cuerpo.insertAdjacentHTML("beforeend", ` <tr>
                                            <td>${a}</td>
                                            <td>${b}</td>
                                            <td>${a && b}</td>
                                        </tr>`);
