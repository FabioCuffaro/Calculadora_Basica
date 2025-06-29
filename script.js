/*Simbolos para el Switch
← , − , × , ÷ , +    */

let total = 0;
let buffer = "0";
let operadorAnt;

const pantalla = document.querySelector("pantalla");

/*Función que muestra por pantalla la operación final*/

function click(valor){ 
    if(isNaN(valor)){
        simbolo(valor);
    } else{
        numero(valor);
    }

    pantalla.innerText = buffer;
}

function simbolo(valor){
    switch(valor){
        case 'C':
            buffer;
            total = 0;
            break;
        case '←':
            if(buffer.length === 1){
                buffer='0';
            }else{
                buffer = buffer.substring(0, buffer.length-1);
            }
            break;
        case '=':
            if(operadorAnt === null){
                return;
            }
            operacion(parseInt(buffer));
            break;

        case '−':
        case '×':
        case '+':
        case '÷':
            calculo(valor);
            break;
    }

    function calculo(valor){
        if( buffer === 0){
            return;
        }if-else{

        }
    }
}
