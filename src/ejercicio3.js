// Inserte el código aquí

//#1 Funcion ClonarArreglo



//#2 Funcion ClonarObjeto



//#3 Funcion Sumar
 function sumar(... numeros){
    return numeros.reduce((acumulador, valorActual){
        return acumulador + valorActual
    },0)
 }
const resultado = sumar (2,5,7,1)

// #4 Funcion saludar 
function saludar(nombre = 'desconocido'){
    console.log('Hola',nombre)
}
saludar('Juan De Dios')

// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };