import { Veiculo } from "./Veiculo";

export class Moto extends Veiculo {
    private _cilindrada: number;
    private _partida: number;

    constructor(numero: number, tipo: number, marca: string, modelo: string, cor: string, anoFabricacao: number, preco: number, cilindrada: number, partida: number) {
        super(numero, tipo, marca, modelo, cor, anoFabricacao, preco);
        this._cilindrada = cilindrada;
        this._partida = partida;
        
    }

    public get cilindrada() {
        return this._cilindrada
    }

    public set cilindrada(cilindrada: number) {
        this._cilindrada = cilindrada
    }

    public get partida() {
        return this._partida
    }

    public set partida (partida: number) {
        this._partida = partida
    }

    public visualizar(): void {
        let partida = "";

        switch(this._partida) {
        case 1:
            partida = "Elétrica";
        break;
        case 2:
            partida = "Manual"
        break;
        }

        super.visualizar()
    console.log(
        `           Cilindradas: ${this._cilindrada}`)
    console.log(
        `           Partida: ${partida}`)
    }
}
