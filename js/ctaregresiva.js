const ms24horas = 1000 * 60 * 60 * 24;
const cta_regresiva = document.getElementById('contador');
ahora = new Date();
fechaFin = ahora.getTime() + ms24horas;
fechmaniana = new Date(fechaFin);
difTiempo = fechaFin - ahora;

let tiemporegresivo = setInterval(() => {
    days = Math.floor(difTiempo / (1000*60*60*24)),
    hours = Math.floor(difTiempo % (1000*60*60*24) / (1000*60*60));
    minutes = Math.floor(difTiempo % (1000*60*60) / (1000*600));
    seconds = Math.floor(difTiempo % (1000*60) /  (1000));

    cta_regresiva.innerHTML = 'Faltan: ${days} dias ${hours} horas ${minutes} mins ${seconds} segs';

    difTiempo--

    if (difTiempo < 0){
        clearInterval(tiemporegresivo);
    }
    console.log(difTiempo)
},1000);
