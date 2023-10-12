proceso1= async() => {
    let suma1=0
    return new Promise ((resolve, reject) => setTimeout(()=>{
        for (let i =0; i<=5000; i++){
            suma1+=1
        }
        resolve("La suma es :"+suma1)
    }, 10)
    )
} 
document.querySelector('#btnBuscar')
.addEventListener('click', ()=>{
    proceso1().then(mensaje => console.log(mensaje))
})