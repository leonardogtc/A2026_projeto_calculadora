class CalcController {

    constructor() {
        this._displayCalc = "4567";
        this._dataAtual = new Date();
        this.initialize();
    }

    initialize() {

        let displayCalcEl = document.querySelector("#display");
        let dataEl = document.querySelector("#data");
        let horaEl = document.querySelector("#hora");

        displayCalcEl.innerHTML = this._displayCalc;
        dataEl.innerHTML = this._dataAtual.toLocaleDateString("pt-BR");
        horaEl.innerHTML = this._dataAtual.toLocaleTimeString("pt-BR");

    }

    get displayCalc() {
        return this._displayCalc;
    }

    set displayCalc(value) {
        this._displayCalc = value;
    }

    get dataAtual() {
        return this._dataAtual;
    }

    set dataAtual(value) {
        this._dataAtual = value;
    }

}