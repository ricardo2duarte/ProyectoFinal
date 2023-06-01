// Oferta de 24 horas
const startingMinutes = 1440;
var time;
// Elemento id del HTML que vamos a modificar
const countDownEl = document.getElementById('contador');

// Averiguamos si el archivo existe y si se llama tiempo
if((typeof(Storage) !== 'undefined') && ((isNaN(localStorage.getItem("tiempo"))== false))){
    time = parseInt(localStorage.getItem("tiempo"));
//    console.log(time);
}else{
    time = startingMinutes * 60;
}
// Si tiempo no es un numero lo inicializa
if(isNaN(time)){
    time = startingMinutes * 60;
}

function mostrarCartelVenta(){
    msgCounter.innerHTML = ``;
//    countDownEl.style.fontSize = `2em`;
    countDownEl.innerHTML = `¡Lo sentimos, pero la oferta ya termino!`;
}

let iterarCountDown = setInterval(() => {
    const hours = Math.floor((time/60)/60);
    const minutes = Math.floor((time/60)%60);
    let seconds = time % 60;
    countDownEl.innerHTML = `<p>Aprovecha la oferta por:</p><strong>${hours} horas ${minutes} minutos ${seconds} segundos!</strong>`;
    time--;
    let timo = time;
    localStorage.setItem("tiempo", timo);

    if(time < 0){
        clearInterval(iterarCountDown);
        mostrarCartelVenta();
    }
}, 1000);
