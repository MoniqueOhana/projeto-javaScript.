export abstract class Veiculo {
    private _numero: number;
    private _tipo: number;
    private _marca: string;
    private _modelo: string;
    private _cor: string;
    private _anoFabricacao: number;
    private _preco: number;

    constructor(numero: number, tipo: number, marca: string, modelo: string, cor: string, anoFabricacao: number, preco: number) {
        this._numero = numero;
        this._tipo = tipo;
        this._marca = marca;
        this._modelo = modelo;
        this._cor = cor;
        this._anoFabricacao = anoFabricacao;
        this._preco = preco;
    }

    public get numero () {
        return this._numero;
    }

    public set numero(numero: number) {
        this._numero = numero
    }

    public get tipo () {
        return this._tipo;
    }

    public set tipo (tipo: number) {
        this._tipo = tipo;
    }

    public get marca () {
        return this._marca;
    }

    public set marca(marca: string) {
        this._marca = marca
    }

    public get modelo () {
        return this._modelo;
    }

    public set modelo(modelo: string) {
        this._modelo = modelo
    }

    public get cor () {
        return this._cor;
    }

    public set cor(cor: string) {
        this._cor = cor
    }
    
    public get anoFabricacao () {
        return this._anoFabricacao;
    }

    public set anoFabricacao(anoFabricacao: number) {
        this._anoFabricacao = anoFabricacao
    }

    public get preco () {
        return this._preco;
    }

    public set preco(preco: number) {
        this._preco = preco
    }

    public visualizar(): void {

        let tipo: string = "";

       switch(this._tipo) {
        case 1:
            tipo = "Carro"
        break;
        case 2:
            tipo = "Moto"
        break;
       }
        console.log(`
            _____________________________________________
            Dados do veículo:
            _____________________________________________
            Numero do identificador: ${this.numero}
            Tipo de veículo: ${tipo}
            Marca: ${this.marca}
            Modelo: ${this._modelo}
            Cor: ${this._cor}
            Ano de fabricação: ${this._anoFabricacao}
            Preço: ${this._preco.toFixed(2)}`)
    }
}