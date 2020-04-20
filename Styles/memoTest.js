// Replicar el juego de la memoria. El juego consiste en cartas o items ocultos dispuestos en una grilla 2d al azar. 

// Por turno, la jugadora ingresa las coordenadas de dos items a descubrir. Esos items se muestran, si son iguales quedan descubiertos, sino se vuelven a ocultar (por lo tanto todo item tiene su par)

// , y se pierde un intento. El juego termina cuando se descubren todos los items o se quedan sin intentos (5 por defecto).

// Se debe validar la jugada para ver si es una casilla válida, si no lo es aviasr y no contarlo como intento
// Se deben usar las coordenadas pidiendo (X, Y), y teniendo el punto de origen (1,1) abaja a la izquierda (3,2 significa 3er ítem a la derecha y 2do hacia arriba)

// OPCIONAL: Para agregar complejidad
// Permitir definir cuántos intentos se desea hacer (por default es 5)
// Permitir seguir jugando una vez terminado
// Llevar un historial de partidas jugadas (con cuantos intentos se hizo, con qué tablero y si se ganó o no)

// se definen los elemntos a mostrar en el tablero
const arrOriginal = [2, 3, 4, 6, 8, 9, 2, 3, 4, 6, 8, 9]
/*********** FUNCIONES ***********/
// recibe un arreglo simple y lo retorna con sus elementos mezclados
const randomArr = arr => {
  for(let i = arr.length; i; i--){
    let j = Math.floor(Math.random() * i)
    let k = arr[i -1]
    arr[i - 1] = arr[j]
    arr[j] = k
  }
  return arr
}
// recibe un arreglo simple y retorna un arreglo 2D
const creoArr2D = arr =>{
  const arr2D = []
  for(let i = 0; i < arr.length; i += 4){
    let aux = arr.slice(i, i + 4)
    arr2D.push(aux)
  }
  return arr2D
} 
// recibe un arreglo simple y oculta sus elementos
const ocultoElementos = arr =>{
  const ocultos = []
  for(let i = 0; i < arr.length; i ++){
    ocultos.push("✖️")
  }
  return ocultos
}
// recibe un arreglo 2D y retorna un tablero
const imprimoTablero = arr2D => {
  let tablero = ""
  for(let i = 0; i < arr2D.length; i++){
    let auxiliar = ""
    for(let j = 0; j < arr2D[i].length; j++){
      auxiliar += arr2D[i][j] + ` `
    }
    tablero += auxiliar + `\n`
  }
  return tablero
}
// recibe coordendas y las muestra en el tablero
const tableroParcial = (coor1, tableroOculto, tableroNumeros) =>{
  let a = coor1[0] -1;
  let b = coor1[1] -1;
  tableroOculto[a][b] = tableroNumeros[a][b]
  return imprimoTablero(tableroOculto)
}

// recibe las jugadas, las compara y actualiza el tablero
const compararJugadas = (jugada1, jugada2, tableroOculto, tableroNumeros) => {
  let a = jugada1[0] - 1;
  let b = jugada1[1] - 1;
  let c = jugada2[0] - 1;
  let d = jugada2[1] - 1;
 
  if(tableroNumeros[a][b] === tableroNumeros[c][d]){
      alert(`Adivinaste`)
      tableroOculto[a][b] = tableroNumeros[a][b] ;
      tableroOculto[c][d] = tableroNumeros[c][d]
  }  else {
        rondas--
        alert(`Número incorrecto, te quedan ${rondas}`)    
        tableroOculto[a][b] = "✖️";
        tableroOculto[c][d] = "✖️"
  }
  
  return tableroOculto
}

// función para crear mensaje con historial de cada juego
const obtenerHistorial = (historialJugadas) => {
    let historial = "";

    for (let i = 0; i < historialJugadas.length; i++) {
        historial += `${historialJugadas[i].join(" ")} / ${historialPistas[i].join(" ")}\n`
    }

    return historial;
}

// creo un arreglo con elementos mezclados
let numerosMezclados = randomArr(arrOriginal)
// creo un arreglo de elementos ocultos
let elementosOcultos = ocultoElementos(numerosMezclados)
// creo arrgelos 2D de "numerosMezclados" y "elementosOcultos"
let numeros2D = creoArr2D(numerosMezclados)
let ocultos2D = creoArr2D(elementosOcultos)
console.log(numeros2D);
// creo el tablero inicial con elementos ocultos
let tableroInicial = imprimoTablero(ocultos2D)
let juego = true;
let mensaje = `MEMOTEST\n`;
let rondas = 0

while(juego){
  alert(mensaje + tableroInicial)
  let intentos = Number(prompt(`En cuántos intentos crees lograr el desafío`))
  rondas=intentos;
  while(rondas > 0){
    // jugada 1
    let coordenada1 = prompt(`Ingrese coordenadas de la jugada 1`).split("")
    alert(`MEMOTEST\n`+ tableroParcial(coordenada1, ocultos2D, numeros2D))
    // jugada 2
    let coordenada2 = prompt(`Ingrese coordenadas de la jugada 2`).split("")
    alert(`MEMOTEST\n`+ tableroParcial(coordenada2, ocultos2D, numeros2D))

    // tablero con las 2 jugadas actualizadas
    let tableroActualizado = compararJugadas(coordenada1, coordenada2, ocultos2D, numeros2D)
    tableroInicial = imprimoTablero(tableroActualizado)

    }
  juego = confirm(`¿Querés volver a jugar?`)
}


// Falta mostrar mensaje si adivina o no, setear intentos, crear historial

    

// comparar jugadas y que los valores ingresados sean válidos
// const validarCoordenadas =(coor)=>{
//    let resultado
//     if(coor[0] > 3 || coor[1] > 4) {
//         resultado =`Ingrese valores válidos`
       
//     } 
//     return resultado
// }

