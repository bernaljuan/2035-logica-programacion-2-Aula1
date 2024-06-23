let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'vez' : 'vecez'}`);
    } else {
        //Usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero es menor');
        } else {
            asignarTextoElemento('p', 'el numero es mayor');
        }
        intentos++;
    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10)+1;
    
}

asignarTextoElemento('h1','Juego del numero secreto!');
asignarTextoElemento('p','Adivina el número entre 1 y 10');


