console.log("Hola");
var A = 8
var B = 7
console.log(A +B);
console.log(A *B);
console.log(A-B);
if (B===0) {
    console.log("No se puede dividir");
} else {
    console.log(A /B);
}

let contador = 1
while (contador < 10) {
    console.log(contador);
    contador = contador + 1
}

let diasSemana = 7

    switch (diasSemana) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miercoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sabado");
            break;
        case 7:
            console.log("Domingo");
            break;
    
        default:
            break;
    }

