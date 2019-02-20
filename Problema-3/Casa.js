export default class Casa{
    constructor(ubicacion, superficie, numeroHabitaciones, numeroBanos){
        this._ubicacion = ubicacion;
        this._superficie = superficie;
        this._numeroHabitaciones = numeroHabitaciones;
        this._numeroBanos = numeroBanos;
    }

    get ubicacion(){
        return this._ubicacion;
    }

    get superficie(){
        return this._superficie;
    }

    get numeroHabitaciones(){
        return this._numeroHabitaciones;
    }

    get numeroBanos(){
        return this._numeroBanos;
    }

    set ubicacion(ubicacion){
        this._ubicacion = ubicacion;
    }

    set superficie(superficie){
        this._superficie = superficie;
    }

    set numeroHabitaciones(numeroHabitaciones){
        this._numeroHabitaciones = numeroHabitaciones;
    }

    set numeroBanos(numeroBanos){
        this._numeroBanos = numeroBanos;
    }    
}