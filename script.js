/*Simbolos para el Switch
← , − , × , ÷ , +    */

// Calculadora Básica funcional desde cero
let total = 0;
let buffer = "0";
let operadorAnt = null;

const pantalla = document.querySelector(".pantalla");

function click(valor) {
    if (isNaN(parseInt(valor))) {
        manejarSimbolo(valor);
    } else {
        manejarNumero(valor);
    }
    pantalla.innerText = buffer;
}

function manejarNumero(numero) {
    if (buffer === "0" || buffer === "operando") {
        buffer = numero;
    } else {
        buffer += numero;
    }
}

function manejarSimbolo(simbolo) {
    switch (simbolo) {
        case "C":
            buffer = "0";
            total = 0;
            operadorAnt = null;
            break;

        case "←":
            if (buffer.length === 1) {
                buffer = "0";
            } else {
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;

        case "=":
            if (operadorAnt === null) {
                return;
            }
            realizarOperacion(parseInt(buffer));
            operadorAnt = null;
            buffer = total.toString();
            total = 0;
            break;

        case "+":
        case "−":
        case "×":
        case "÷":
            pantalla.innerHTML='operando';
            manejarOperacion(simbolo);
            break;
    }
}

function manejarOperacion(simbolo) {
    const intBuffer = parseInt(buffer);
    if (total === 0) {
        total = intBuffer;
    } else {
        realizarOperacion(intBuffer);
    }
    operadorAnt = simbolo;
    buffer = "0";
}

function realizarOperacion(intBuffer) {
    if (operadorAnt === "+") {
        total += intBuffer;
    } else if (operadorAnt === "−") {
        total -= intBuffer;
    } else if (operadorAnt === "×") {
        total *= intBuffer;
    } else if (operadorAnt === "÷") {
        total = Math.floor(total / intBuffer);
    }
}


function init() {
    document.querySelectorAll(".calc-button").forEach(boton => {
        boton.addEventListener("click", function () {
            click(boton.innerText);
        });
    });
}

init();