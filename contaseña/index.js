let contraseña = 12345;
let contraseña2 = 12345;
if (contraseña === contraseña2) {
    console.log("Contaseña correcta");
} else if (contraseña!==contraseña2){
    console.log("Es incorrecta");
}



let A = 0
let B = 1
let I = 1
for (let index = 0; index < 9; index++) {
    console.log(A);
    C = A + B
    A = B
    B= C
    I = I + 1
}

let a= 1
let operacion = 1
for (let index = 0; index < 8; index++) {
    operacion= a * operacion
    console.log(operacion);
    a++
}


for (let index = 0; index < 20; index++) {
    if (index %2==0) {
        console.log(index);
    } else if (index %2!= 0){
        console.log(index);
    }
}

function sumarPares(numeros) {
    let suma = 0
    for (let i=1; i<=numeros; i++)
      if (i %2==0)
        suma=i
    return suma
  }
  