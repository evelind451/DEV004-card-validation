import validator from './validator.js';
//importe las funciones declaradas en validator.js e hice refrerencia en este index.js//

document.getElementById("myBtn").addEventListener("click", function(){//funcion para validar mi boton //
  const cardNumber = document.getElementById("cardnumber").value;//variable que recibe el numero de la tarjeta//
  const lastFourDigits = validator.maskify(cardNumber);//para ocultar los ultimos cutro numeros//
  document.getElementById("cardnumber").value= lastFourDigits;//el valor que se le de a cardnumber se olcuten los ultimos 4 numeros//
  document.getElementById("message").innerText = '';//insertando espacio vacio para agregar los mensajes //
  if (validator.isValid(cardNumber)) {
    //const boleanos=validator.isValid(cardNumber);//si los valores son verdaderos o falsos//
    //alert(boleanos);
    document.getElementById("message").innerHTML = "Número de tarjeta válido.";
    //document.getElementById("result").innerHTML = cardNumber;
  } else {
    document.getElementById("message").innerHTML = "Número de tarjeta inválido.";
    document.getElementById("result").innerHTML = "";
  }
});




//console.log(validator);
