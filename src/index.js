// Inserte el código aquí

const { response } = require("express")

//Ejecicio#1
function HoraActual(){
    let today = new Data();
    let hora = today.getHoras();
    let minutos = today.getMinutes();

    return hora + minutos;
}
function Actualizar(){
    let horaElemento = document.querySelector(".Hora");
    horaElemento.textContent = HoraActual();
}
//ObtenerUsuarios

function ObtenerUsuarios(){
    fetch ('http://localhost:3000/users')
    .then((response) => response.json())
    .then((data) => {
      console.log("lista de usuarios", data);
    })
    .catch((error ) => {
    console.log ("Error con la lista", error);
    });
}

function usuarios(){
    return new Promise(obtenerListaDeUsuarios);
 }

 async function datos(){
    const datosdeUsuarios = await ObtenerUsuarios();
    console.log (datosdeUsuarios)
 }