import Paciente from "./Paciente.js";

let Paciente1 = new Paciente('Edgar Marcelino Zamora Cruz', '18/07/2018', 1.80, 90);

Paciente1.nombre = 'Alexander Jesús';
console.log(Paciente1.nombre);
Paciente1.getInformacion();