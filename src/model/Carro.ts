import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo {
    private _portas: number;
    private _cambio: string;


    constructor(numero: number, tipo: number, marca: string, modelo: string, cor: string, anoFabricacao: number, preco: number, portas: number, cambio: string) {
        super(numero, tipo, marca, modelo, cor, anoFabricacao, preco);
        this._portas = portas;
        this._cambio = cambio;
    }

    public get portas() {
        return this._portas
    }

    public set portas(portas: number) {
        this._portas = portas
    }

    public get cambio() {
        return this._cambio
    }

    public set cambio (cambio: string) {
        this._cambio = cambio
    }

    public visualizar(): void {
        super.visualizar();
        console.log("\tQuantidade de portas: "+this._portas);
        console.log("\tCâmbio: "+this._cambio);
    }
}