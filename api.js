
const bus = document.querySelector("#buscar")

bus.addEventListener("click" ,()=>{
    const per = document.querySelector("#person").value

    const url =`https://thesimpsonsquoteapi.glitch.me/quotes?character=${per}`;
    

    fetch(url)
    .then(res => res.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error))

    const mostrar = (data)=>{
        console.log(data)

        let nomb = ''
        let imag = ''

        for(let i = 0; i<data.length;i++){
            nomb = `<p>${data[i].character}</p>`
            imag = `<img src="${data[i].image}" alt="${data[i].character}">`

        }

        if( nomb == ''){
            const fallaN = `<p>No se encontro al perosonaje</p>`
            const fallaI = ''
            document.querySelector(".nombre_per").innerHTML = fallaN
            document.querySelector(".img__personaje").innerHTML = fallaI
        }else{
            document.querySelector(".nombre_per").innerHTML = nomb
            document.querySelector(".img__personaje").innerHTML = imag
        }
        //console.log(nomb)
    }
 
})