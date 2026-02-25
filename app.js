function magia(){
    let nombre = document.getElementById("nombre-usuario").value
    document.getElementById("titulo-principal").innerText = "Felicidades "+nombre+ "!"
}

function agregarNumero(numero){
    document.getElementById("display").innerText += numero;
}

function limpiar(){
    document.getElementById("display").innerText = "";
}

function calcular() {
    let operacion = document.getElementById("display").innerText;
    let resultado = eval(operacion);
    document.getElementById("display").innerText = resultado;
}