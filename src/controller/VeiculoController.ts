import { Veiculo } from "../model/Veiculo";
import { VeiculoRepository } from "../repository/VeiculoRepository";

export class VeiculoController implements VeiculoRepository {

    private listaVeiculos: Array<Veiculo> = new Array<Veiculo>();
    numero: number = 0;

    buscarPorId(numero: number): void {
        let buscaVeiculo = this.buscarNoArray(numero);

        if (buscaVeiculo != null) {
            buscaVeiculo.visualizar();
        } else {
            console.log("O veículo com o ID "+numero+" não foi encontrado.")
        }
    }
    listarTodos(): void {
        for (let veiculo of this.listaVeiculos) {
            veiculo.visualizar()
        };
    }
    cadastrar(veiculo: Veiculo): void {
        this.listaVeiculos.push(veiculo);
        console.log(veiculo.tipo+" cadastrado com sucesso!")
    }
    atualizar(veiculo: Veiculo): void {
        let buscaVeiculo = this.buscarNoArray(veiculo.numero)

        if(buscaVeiculo != null) {
            this.listaVeiculos[this.listaVeiculos.indexOf(buscaVeiculo)] = veiculo;
            console.log("O veículo "+veiculo.numero+" foi atualizado com sucesso!")
        } else {
            console.log("O veículo "+veiculo.numero+" não foi encontrado.")
        }
    }
    deletar(numero: number): void {
        let buscaVeiculo = this.buscarNoArray(numero);

        if(buscaVeiculo != null) {
            this.listaVeiculos.splice(this.listaVeiculos.indexOf(buscaVeiculo), 1);
            console.log("O veículo "+ buscaVeiculo.marca + " "+buscaVeiculo.modelo+", ID "+numero+" foi deletado!")
        } else {
            console.log("O veículo ID"+" não foi encontrado.")
        }
    }
    
    public gerarNumero(): number {
        return ++this.numero;
    }

    public buscarNoArray(numero: number): Veiculo | null {
        for (let veiculo of this.listaVeiculos) {
            if (veiculo.numero === numero)
                return veiculo;
        }
        return null;
    }
}