
// Tiempo y Fecha
const tiempo = document.querySelector('.tiempo'),
fecha = document.getElementById('fecha');

// Funcion reloj

function relojdigital (){
    let r = new Date(),
    dia = r.getDate(),
    mes = r.getMonth(),
    año = r.getFullYear(),
    diadesemana = r.getDay();
   
    let timeString = r.toLocaleTimeString();
    tiempo.innerHTML = timeString;
   
}

setInterval(() => {
    relojdigital()
}, 1000);
  
