
// Simula una función de validación en el servidor
function Login(username, password) {
    return new Promise((resolve, reject) => {
      // En una implementación real, aquí harías una solicitud a un servidor
      // para validar el usuario y la contraseña.
      // En este ejemplo, simplemente comprobamos si el usuario es "admin" y la contraseña es "password".
  
      if (username === "admin" && password === "password") {
        resolve(Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          showConfirmButton: false,
          timer: 1500
        }));
      } else {
        reject(Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Credenciales incorrectas!',
          footer: '<a href="">Why do I have this issue?</a>'
        }));
        
      }
    });
  }
  
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const resultMessage = document.getElementById("resultMessage");
  
    Login(username, password)
      .then((message) => {
        resultMessage.textContent = message;
      })
      .catch((error) => {
        resultMessage.textContent = error;
      });
  });
  