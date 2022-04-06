const getRemainTime = (deadline) => {
    let now = new Date(),

    remainTime = (new Date(deadline) - now + 1000) / 1000,

    remainseconds = ( `0` + Math.floor( remainTime % 60)).slice(-2),

    remainMinutos =  ( `0` + Math.floor( remainTime /60 % 60)).slice(-2),

    remainHours =  ( `0` + Math.floor( remainTime /3600 % 24)).slice(-2),

    remainDays = Math.floor( remainTime / (3600 * 24))

    return{
        remainTime,
        remainseconds,
        remainMinutos,
        remainHours,
        remainDays
    }
}

const countdown = (deadline , elem , finalMessage) => {

    let el = document.getElementById(elem);

    const timeUpdate = setInterval( () => {
        
        let t = getRemainTime(deadline);

        el.innerHTML = `${t.remainDays} Dias : ${t.remainHours} Hs : ${t.remainMinutos} M : ${t.remainseconds} S`
        
        if (t.remainTime <= 1){
            clearInterval(timeUpdate)
            el.innerHTML = finalMessage
        }
    }, 1000)
}




countdown(`Oct 22 2022 00:00:00 GMT-0300` ,`temporizador`,`Es Hoy`)

// maquina de escibir 

let writing = (str) => {
    let arrFromStr = str.split(``)
    let i = 0;
    var titulo = document.getElementById('NosCasamos')

    let printStr = setInterval(function(){
        titulo.innerHTML += arrFromStr[i];
        i++
        if(i === arrFromStr.length){
            clearInterval(printStr)
        }
    },200)
}

writing("Nos Casamos")
let writing2 = (str2) => {
    let arrFromStr2 = str2.split(``)
    let i = 0;
    var titulo2 = document.getElementById('NosCasamosNombres')
    let printStr = setInterval(function(){
        titulo2.innerHTML += arrFromStr2[i]
        i++
        if(i===arrFromStr2.length){
            clearInterval(printStr)
        }
    },200)
}

writing2("Luis & Luciana")


// mensaje Whatsap

let btnwts1 = document.getElementById("whatsap1")

btnwts1.addEventListener(`click`,enviarMsj)

let btnwts2 = document.getElementById("whatsap2")

btnwts2.addEventListener("click",enviarMsj)

function enviarMsj () { 
    let inputName = document.getElementById("nombreMsj").value;
    let inputAsistencia = document.getElementById("asistencia").value;
    let inputPedidos = document.getElementById("pedidosEspeciales").value
    let url = "https://api.whatsapp.com/send/?phone=541160410242&text=Nombre: %0A"+ inputName + ", Confirmo que " + inputAsistencia +" al casamiento."+ "%0A%0A Pedidos Especiales: %0A" + inputPedidos+"." +" %0A%0A Gracias y Felicidades a los novios "
    window.open(url)
}

