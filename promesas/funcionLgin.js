const Login=(usuario, contraseña)=>{
    const usuarios =[{
        alixtrululu : '273652135',
        lizethlamejor: '27366334'

    }]
    let encontrado=false;
    for (let i = 0; i < usuarios.length; i++) {
        if (usuario==usuarios[i]) {
            encontrado=true
            var nombre= nombres[i]
            
        }
        for (let i = 0; i < nombres.length; i++) {
           
            
        }
        
        
    }
  return new Promise((resolve, reject)=>{
    if (encontrado) {
        resolve('El nombre que coincide con el documento '+dato+ ' ingresado es : '+ nombre)
        
    }
    else{
        reject('Dato no encontrado')
    }

  })
}
document.querySelector('#btnBuscar')
.addEventListener('click', ()=>buscarCliente(document.getElementById('dato').value)
.then(mensaje =>console.log(mensaje))
.catch(error=>console.log(error))


)