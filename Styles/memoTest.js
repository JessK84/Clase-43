// Replicar el juego de la memoria. El juego consiste en cartas o items ocultos dispuestos en una grilla 2d al azar. 

// Por turno, la jugadora ingresa las coordenadas de dos items a descubrir. Esos items se muestran, si son iguales quedan descubiertos, sino se vuelven a ocultar (por lo tanto todo item tiene su par)

// , y se pierde un intento. El juego termina cuando se descubren todos los items o se quedan sin intentos (5 por defecto).

// Se debe validar la jugada para ver si es una casilla válida, si no lo es aviasr y no contarlo como intento
// Se deben usar las coordenadas pidiendo (X, Y), y teniendo el punto de origen (1,1) abaja a la izquierda (3,2 significa 3er ítem a la derecha y 2do hacia arriba)

// OPCIONAL: Para agregar complejidad
// Permitir definir cuántos intentos se desea hacer (por default es 5)
// Permitir seguir jugando una vez terminado
// Llevar un historial de partidas jugadas (con cuantos intentos se hizo, con qué tablero y si se ganó o no)

// TABLERO DE ELEMENTOS YA DEFINIDO
const numerosTablero =[2, 3, 4, 6, 8, 9, 2, 3, 4, 6, 8, 9];


// =========== FUNCIONES ================================//

// función para que muestre un array completo de números al azar.
const arrayNumerosAzar =(numeros)=>{
    let i,j,k;
    for (i = numeros.length; i; i--) {
        j = Math.floor(Math.random() * i);
        k = numeros[i - 1];
        numeros[i - 1] = numeros[j];
        numeros[j] = k;
        }
    return numeros
}



// función para armar array2D, los elementos se deben pushear de 4 en 4= (i+=4)
const obtenerArr2D = (numeros) =>{
    let arr2D=[];
        for (let i = 0; i < numeros.length; i+=4) {
            let arr1=numeros.slice(i, i+4);
            arr2D.push(arr1)   
        } 
    return arr2D
}

// OBTENER UN VALOR OCULTO => ocultar un array
const ocultarValor = (numeros) =>{
    let arr2D=[];
        for (let i = 0; i < numeros.length; i++) {
            arr2D.push("✖️")      
        } 
    return arr2D
}


// función para agregar elementos aleatorios al Array2D
    //función para llamar a otra y convertir un array de elementos en aleatorios
let tableroAleatorio= arrayNumerosAzar(numerosTablero); //hago aleatorio el array
console.log(tableroAleatorio)

    // función para llamar otra y ocultar un array aleatorio
let muestroValorOculto= ocultarValor(tableroAleatorio); //"✖️✖️✖️"/
console.log(muestroValorOculto)

    // función para llamar otra y para q los elementos ocultos se posicionen en un array2D
let muestroArray2D= obtenerArr2D(muestroValorOculto); //hago aleatorio el arr2D
console.log(muestroArray2D)

let array2DNumeros= obtenerArr2D(tableroAleatorio)
// console.log(array2DNumeros)

const imprimoArray2D=()=>{
    let imprimoTablero="";

    for (let i = 0; i < muestroArray2D.length; i++) {
           let auxiliar="";
        for (let j = 0; j < muestroArray2D[i].length; j++) {
            auxiliar+= muestroArray2D[i][j] + ` `
        }
        imprimoTablero+= auxiliar + `\n`
    }
    return imprimoTablero
}

// función elegir números (coordenadas)
// const ingreseCoordenadas =(tablero)=>{
//     console.log(tablero)
//     let filas = "";
//     let columnas = "";
//     let resultado =tablero[filas] && tablero[filas][columnas];
//     if(resultado !== undefined){
//         return resultado
//     } else {
//         return(`Ingrese índices correctos`)
//     }
// }

// función para que compare los números y las coordenadas del usuario


// función para que obtenga las 2 jugadas, compararlas y actualizar el tablero
const obtenerJugadas=(tablero)=>{   
    console.log(tablero)
    let jugada1=prompt("Ingrese las coordenadas: 'X Y'").split(" ")
    let a= jugada1[0]
    let b=jugada1[1]
    let jugada2= prompt("Ingrese las coordenadas: 'X Y'").split(" ")
    let c= jugada2[0]
    let d=jugada2[1]
    let resultado =tablero[a -1][b -1] === tablero[c -1][d -1] ? tablero[a -1][b -1] &&tablero[c -1][d -1] : "✖️";
    console.log(resultado)
    if(resultado !== "✖️" ){
        muestroArray2D[a -1][b -1]=resultado
        muestroArray2D[c -1][d -1] =resultado
    } 
    return muestroArray2D
}


// const comparaElementos =(x, y)=>{
//     let resultado = x===y ? x && y : "✖️";   
//         return resultado
// }

// obtener historial 
// const obtenerHistorial =(partidas, partidasGanadas, partidasPerdidas)=>{
//     resultado="";
//     for (let i = 0; i < partidas.length; i++) {       
//     }
// }

// función para mostrar mensaje para armar el historial
const mostrarHistorial = (historialJugadas, jugadasGanadas, jugadasPerdidas) => {
    let historial = "";

    for (let i = 0; i < historialJugadas.length; i++) {
        historial += `${historialJugadas[i].join(" ")} / Partidas Ganadas: ${jugadasGanadas[i].join(" ")}\n` + `/ Partidas perdidas: ${jugadasPerdidas[i].join(" ")}`
    }
    return historial;
}


// crear variable de vueltas
let vueltas = 5;

// Condición de salida
let aJugar = true;
let mensajeInicio = `Comencemos!!! ` + `\n`


// while(aJugar){

//     let vueltas = 5;
    

//     // COMIENZA EL JUEGO
//     while(vueltas){
//         alert(mensajeInicio + imprimoArray2D(muestroValorOculto));
//     // let actualizarTablero = imprimoArray2D(muestroValorOculto);
//     alert(obtenerJugadas(imprimoArray2D(muestroArray2D)))
//     // alert(imprimoArray2D(actualizarTablero))
  
//     vueltas--  
    
//     }
    
//     aJugar = confirm(`¿Desea seguir jugando?`)
// }


    

// JUGADORA
    // ingresar dos coordenadas para ver si acierta (x,y)
    // si erra, pierde un intento
    // si acierta, quedan descubiertos los números
    // si erra, vuelven a cubrise



// JUEGO TERMINA
    // cuando se descubren todos lo números
    // o cuando terminan los 5 intentos


