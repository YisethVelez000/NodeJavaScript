// function saludar(nombre) { 

//     alert("Hola " + nombre + " cómo estás?");
// }

// function procesarEntradaUsuario(callback) { 

//     var nombre = prompt("Por favor ingresa tu nombre");
//     callback(nombre);
// }

//  procesarEntradaUsuario(saludar);


 /*Implementar un código donde emplée callback. Recibir un número y sí el número es mayor a 10
  Calcular e imprimir en otra función la suma de los números del 1 al 100*/

  function suma (numero) { 

    if (numero > 10 ) { 
        let acum = 0;
        for (var i = 1; i <= 100; i++) { 

            acum += i;

        }
        alert(acum); 
    }
    else {
      alert("Ingresa un numero  mayor a 10" )
    }

  }


  function procesarSuma(callback) { 

    var numero = prompt("Por favor ingrese un numero"); 
    callback(numero);

  } 

  procesarSuma(suma);