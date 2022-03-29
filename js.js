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

        el.innerHTML = `${t.remainDays} Dias : ${t.remainHours}Hs : ${t.remainMinutos}Min : ${t.remainseconds}Seg`
        
        if (t.remainTime <= 1){
            clearInterval(timeUpdate)
            el.innerHTML = finalMessage
        }
    }, 1000)
}




countdown(`Oct 15 2022 00:00:00 GMT-0300` ,`temporizador`,`Es Hoy`)
