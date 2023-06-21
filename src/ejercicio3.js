// Inserte el código aquí

//#1 Funcion ClonarArreglo



//#2 Funcion ClonarObjeto



//#3 Funcion Sumar
let sumaTotal = (acumulador, valorActual) =>{
    return acumulador + valorActual;
};

function sumar (...numeros){
    return numeros.reduce(sumarTotal,0);
}

const resultado = sumar (2,4,7,);

// #4 Funcion saludar 
function saludar(nombre = 'desconocido'){
    console.log('Hola',nombre)
}
saludar('Juan De Dios')

// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };