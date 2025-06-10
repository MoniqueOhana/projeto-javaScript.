import { Veiculo } from "../model/Veiculo";

export interface VeiculoRepository {
    buscarPorId(numero: number): void;
    listarTodos(): void;
    cadastrar(veiculo: Veiculo): void;
    atualizar(veiculo: Veiculo): void;
    deletar(numero: number): void;

}