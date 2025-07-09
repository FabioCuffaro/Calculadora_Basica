/*Simbolos
← , − , × , ÷ , +    */

// Calculadora Básica funcional desde cero
const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.calc-button');

let operacion = ""; // almacena la operación como string

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const texto = boton.textContent.trim();

        if (texto === "C") {
            operacion = "";
            pantalla.textContent = "0";
        }
        else if (texto === "←") {
            operacion = operacion.slice(0, -1);
            pantalla.textContent = operacion || "0";
        }
        else if (texto === "=") {
            try {
                // Evaluar de forma segura reemplazando símbolos por operadores JS, 
                //sino sería complicadas las operaciones
                const resultado = eval(operacion
                    .replace(/÷/g, '/')
                    .replace(/×/g, '*')
                    .replace(/−/g, '-')
                    .replace(/–/g, '-') // en caso de guiones largos
                    .replace(/\+/g, '+')
                );
                pantalla.textContent = resultado;
                operacion = resultado.toString(); // permite seguir operando
            } catch {
                pantalla.textContent = "Error";
                operacion = "";
            }
        }
        else {
            // Permite insertar negativos al inicio
            if (operacion === "" && texto === "−") {
                operacion += "-";
                pantalla.textContent = operacion;
                return;
            }

            // Añadir el símbolo o número a la operación
            operacion += texto;
            pantalla.textContent = operacion;
        }
    });
});
