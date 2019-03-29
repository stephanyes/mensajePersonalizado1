// function sayMyName(yourName) {
// alert('Tu nombre es ' + yourName);
// }
//
// var myName = 'Stephano';
//
// sayMyName(myName);
// sayMyName('Tu Vieja en Tanga');
// sayMyName('69 420 666');


function saludar (firstName, lastName, age){
    var mensaje = ("Hola " + firstName + " " + lastName + " tienes " + age + " años. Bienvenido!");
    return mensaje;

}
var firstName = prompt ("Ingrese su nombre");
var lastName = prompt("Ingrese su apellido");
var age = prompt("Cual es su edad?");

if (age <18){
  alert("Sr/a usted tiene " + age + " anios, es menor de edad");
} else {
  alert(saludar(firstName, lastName, age));
}

// console.log(saludar(firstName, lastName, age));
// alert(saludar(firstName, lastName, age));
