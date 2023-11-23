const img = document.getElementById("product")
console.log(img)

const images = new Array(
    "../img/grafico1.jpg",
    "../img/grafico2.jpg"
)

let bandera = false

img.addEventListener("mouseover",(e)=>{
    var index=Math.floor((Math.random()*images.length)); 
    img.src = images[index]
})

setInterval(() => {
    
    //Ejecutando todos los cambios a los 5s de espera
    if(!bandera){       
        var index=Math.floor((Math.random()*images.length)); 
        img.src = images[index]
        //bandera = true
        console.log('creado...')
    }
}, 5000)