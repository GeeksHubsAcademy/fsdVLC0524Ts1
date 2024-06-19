// let myName : string = "Danilo"

// console.log(myName)

// interface Alumno {
//   nombre: string;
//   edad: number;
//   aprobado: boolean;
//   hobbies: Hobbies;
// }

// interface Hobbies {
//   hobbie1: string;
//   hobbie2: string;
//   hobbie3: string;
//   hobbie4: string;
// }

// let Alumno1: Alumno = {
//   nombre: "Guillermo",
//   edad: 25,
//   aprobado: true,
//   hobbies: {
//     hobbie1: "leer",
//     hobbie2: "caminar",
//     hobbie3: "programar",
//     hobbie4: "watch the mummy",
//   },
// };

// console.log(Alumno1)

// let dni: string = "24386107Z";

// let dniArray: string[] = dni.split('');

// let letraDada: string = dniArray[dniArray.length - 1];

// let numeroDni: number = parseInt(dniArray.slice(0, dniArray.length - 1).join(""));

// let resto: number = numeroDni % 23;

// let letras: string = "TRWAGMYFPDXBNJZSQVHLCKET";

// let letrasArray: string[] = letras.split("");

// if (letraDada === letrasArray[resto]) {
//   console.log("DNI válido");
// } else {
//   console.log("DNI no válido");
// }

// const Sumar = (a: number, b: number) : number => {

//     let resultado : number = a + b;

//     return resultado;
// }

// const Saludar = (nombre: string) : void => {
//     console.log(`Hola ${nombre}`)
// }

// Sumar(2,7)
// Saludar("Pepe")

// interface Candidato {
//   name: string;
//   surname: string;
//   age: number;
// }

// let arrayObjetos: Candidato[] = [
//   {
//     name: "Esperanza",
//     surname: "Fornés",
//     age: 24,
//   },
// ];

// let vacaciones: [string, string, string, number] = [
//   "malaga",
//   "sevilla",
//   "ronda",
//   15,
// ];

// let bebidas: [string, string?, number?][] = [
//   ["cola"],
//   ["limon"],
//   ["naraja"],
//   ["ron", "cola", 2]
// ];

// type musica = 'electronica' | 'metal' | 'clasica'

// const myCollection : musica = "clasica"

let añoTerrestresTiera: number = 31557600;

function secondsToYears(secondsAge: number, planeta: string): number | string {
  let ageToYear: number =  secondsAge / añoTerrestresTiera;

  switch(planeta){
    case "Tierra":
        return ageToYear;

    case "Marte":
        return ageToYear  * 0.24;
    
    default: 
        return "Terraplanista!"
  }
}

console.log(secondsToYears(1000000000, "Marte"));
console.log("ufffffff hoy creia que era viernes y miercoles, los alumnos siguen en lunes hahaah")