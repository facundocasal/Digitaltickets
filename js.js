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

// msj whatsapp
function mensaje () {
    let asistire = document.getElementById("asistire").value;
    let noAsistire = document.getElementById("asistire");
    let ComidaVeganaSi = document.getElementById("ComidaVeganaSi");
    let comidaCeliaca = document.getElementById("comidaCeliaca");
    let ninguno = document.getElementById("ninguno").value;
    let telWhatsapp = document.getElementById("Whatsapp1");


        telWhatsapp.setAttribute("href",`https://wa.me/541160410242/?text=confirmo${asistire} con${ninguno}alabodadeluchoyluciana`)


}

mensaje()


