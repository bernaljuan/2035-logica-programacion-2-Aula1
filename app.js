let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 5;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'vecez'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //Usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero es menor');
        } else {
            asignarTextoElemento('p', 'el numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento('p', 'Todos los numeros han sido sorteados');
    } else { 
        //Si el generado ya estaba en la lista, generar otro
        //Include hace un recorrido por la lista y verifica si el valor ya existe
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Adivina el número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';   
}
function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio de numeros
    //Generar numero secreto
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();

