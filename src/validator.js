const validator = {
 
  maskify: function (creditCardNumber){      //funcion maskif, como enmascarar x //
    //console.log(creditCardNumber);
    //console.log(creditCardNumber.length);
    if (creditCardNumber.length > 4) {       
      const hideNumbers = "#".repeat(creditCardNumber.length-4); //constante hide que me oculte los caracteres seleccionados, que me repita ,
      const showLastFour = creditCardNumber.substring(creditCardNumber.length-4);//la cadena  con .repeat y los remplace esa cadena con showwlastfour.
      const mask = hideNumbers + showLastFour;
      //console.log(mask);
      return mask; 

    } else {
      return creditCardNumber;

    }
  },
  isValid: function (creditCardNumber){
    let cardStringReverse = '';
    const splitCardNumber = creditCardNumber.split(""); // esta función (split) convierte un string a array
    const arrayReverse = splitCardNumber.reverse(); // esta funcion (reverse) reversa el array creado
    let acum = 0;
    //console.log(arrayReverse);//npm run start
    for (let index = 0; index < arrayReverse.length; index++) {
      let element = Number(arrayReverse[index]);
      if ((index + 1) % 2 === 0) {
        element = element * 2;
        if (element > 9) {
          const sumanumero = element.toString(); //Convierte el numero mayor a 9 en string (secuencia de caracteres);
          const stringvector = sumanumero.split("");//sumar los numeros dentnro del vector;
          element = parseInt(stringvector[0]) + parseInt(stringvector[1]);
        }
      }
      cardStringReverse = cardStringReverse + element;
      acum = acum + element;
    }
    if (acum % 10 === 0) {
      return true;
    } 
    else {
      return false; 
          
    }
  
  }
}

export default validator;

