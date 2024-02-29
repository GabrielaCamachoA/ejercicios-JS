let a=13
let b= 7
function Suma() {
    resultado= a + b
    return resultado; 
}
console.log(Suma());

function Resta() {
    resultado= a - b
    return resultado;
}
console.log(Resta());

function Multiplicacion() {
    resultado= a * b
    return resultado;
}
console.log(Multiplicacion());

function Division() {
    resultado= a / b
    
    if (b===0) {
        return "No se puede dividir entre 0";
    }else{
        return resultado;
    }
}
console.log(Division ());



let contraseña= 23456
function contraseñaValida(x) {
    if (x== 23456) {
        return true;
    } else if (x== 7897) {
        return true;
    }else {
        return false;
    }
}
console.log(contraseñaValida(contraseña));


function calcularImpuestos(ed, ing) {
    if (ed >= 18 && ing >= 1000) {
        return ing * 0.4;

    }else {
        return 0;
    }
}
console.log(calcularImpuestos(18,1000));

let peso= 58.4
let altura= 1.66
console.log(58.4/1.66**2);
function bmi(bmi) {
    if (bmi< 18.5 ) {
        return "Bajo de peso";
    }else if (bmi>=18.5 && 24.9 ) {
        return "Normal";
    }else if (bmi >= 25 && 29.9 ) {
        return "Sobrepeso";
    }else if (bmi >=30) {
        return "Obeso";
    }
    
}
console.log(bmi(20));


function fizzBuzz (n) {
    if (n%3== 0) {
        return "Multiplo de 3"
    }else if (n%5 ==0) {
        return "Multiplo de 5"
    }else if (n%3 == 0 && n%5== 0) {
        return "Multiplo tanto de 3 y 5"
    }else{
        return "Ninguno";
    }
}
console.log(fizzBuzz(115));


function contarRango(n1,n2) {
   for (let index = n1; index < n2; index++) {
    return n2 -n1 ;
      
   }
}
console.log(contarRango(4,10));



function suma(n) {
    if (n == 1) {
        return 1;
}else {
        return n + suma (n-1)
    }
    
}
console.log(suma(3));

const numeros= [1,2,3,4,5,6,7,8,9,]
console.log(numeros.length)

const paises= ["medellin","bogota","cali"]
paises.length= 2
console.log(paises);

const names= ["gaby","ross","alejo"]
console.log(names.length);

const newLenght= names.push("oscar")
console.log(newLenght);
console.log(names);

const flores=["rosa","girasoles","tulipanes"]
const ultimaflores= flores.pop()
console.log(flores);
console.log(ultimaflores);

let frutas = ['🍎', '🍌', '🍓']
let i = 0// 

while (i < frutas.length) {
  console.log(frutas[i]) 
  i++ 
}

let frutas1= ['🍎', '🍌', '🍓']

for (let i = frutas.length -1; i >= 0 ; i--) {
  console.log(frutas1[i]) 
}

let frutas2= ['🍎', '🍌', '🍓']

for (let fruta of frutas) {
  console.log(fruta)  
}

let frutas3= ['🍎', '🍌', '🍓']

frutas.forEach((fruta) => {
  console.log(fruta) // 
})

const hi=[1,"",true,5,6,"si"]
hi.push("hola")
hi.pop()

hi.unshift("hola")
const shift= hi.shift()
const splice= hi.splice(2,1)
console.log(hi);


const numbers=[1,23,2,4,6,34,75,9,10,34]
const npar= numbers.filter(function (numbers) {
    return numbers %2 === 0;
})
const nimpar= numbers.filter (function (numbers) {
    return numbers%2!== 0;
})
console.log(npar);
console.log(nimpar);


const ocupados = ["Gaby","Ross","Oscar","Milu","Alejo"];
const libres= ["Sofia","Lis","Milagro","Carolina","Laura"]
function rotar(lst1, lst2){
   lst1.shift("Gaby");
   lst2.push("Gaby");
   lst2.shift();
   lst1.push("Sofia");
}

rotar(ocupados, libres);
console.log( ocupados, libres);
    