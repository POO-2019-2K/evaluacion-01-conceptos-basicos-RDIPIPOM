export default class Paciente{
    constructor(nombre, fechaNacimiento, estatura, peso){
        this._nombre = nombre;
        this._fechaNacimiento = fechaNacimiento;
        this._estatura = estatura;
        this._peso = peso;
    }

    get nombre(){
        return this._nombre;
    }

    get fechaNacimiento(){
        return this._fechaNacimiento;
    }

    get estatura(){
        return this._estatura;
    }

    get peso(){
        return this._peso;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set fechaNacimiento(fechaNacimiento){
        this._fechaNacimiento = fechaNacimiento;
    }

    set estatura(estatura){
        this._estatura = estatura;
    }

    set peso(peso){
        this._peso = peso;
    }

    getInformacion(){
        console.log(`Nombre: ${this._nombre}\nFecha de Nacimiento: ${this._fechaNacimiento}\nEstatura: ${this._estatura}\nPeso: ${this._peso}`);
    }
}