import readlinesync = require('readline-sync');
import { Veiculo } from './src/model/Veiculo';
import { Moto } from './src/model/Moto';
import { Carro } from './src/model/Carro';
import { VeiculoController } from './src/controller/VeiculoController';
import { read } from 'fs';

export function main() {
    let veiculos: VeiculoController = new VeiculoController();
    let opcao, numero, tipo, anoFabricacao, preco, portas, cilindrada, partida: number;
    let marca, modelo, cor, cambio: string;
    const tipoVeiculo = ["Carro", "Moto"];

    let carro1: Carro = new Carro (1,1,"Honda","Civic",'Preto', 2010, 58500, 4, "Manual");
    carro1.visualizar();
    veiculos.cadastrar(carro1)
    let carro2: Carro = new Carro(2,1,"Hyundai","Veloster",'Vermelho', 2013, 62900, 3, "Manual");
    carro2.visualizar();
    veiculos.cadastrar(carro2);
    const moto: Moto = new Moto(3,2,'Kawazaki',"Ninja",'Verde', 2022, 35900, 600, 1)
    moto.visualizar();
    veiculos.cadastrar(moto)
    const carro: Carro = new Carro(4,1,"Kia", "Cerato", "Cinza", 2019, 79500, 4, "Automático")
    carro.visualizar();
    veiculos.cadastrar(carro)

    while (true) {
        console.log(`
            _____________________________________________
            
\t1 - Cadastrar novo veículo
\t2 - Listar todos os veículos
\t3 - Buscar por número
\t4 - Atualizar dados do veículo
\t5 - Deletar veículo
\t0 - Sair
_____________________________________________

`);
console.log("Entre com a opção desejada: ");
opcao = readlinesync.questionInt("");

    if (opcao==0) {
        console.log("Obrigada por procurar nossa loja!")
        sobre();
        process.exit(0)
    }

    switch(opcao) {
        case 1:
            console.log('\nCadastrar novo veículo')

            console.log("Digite o tipo de veículo: ")
            tipo = readlinesync.keyInSelect(tipoVeiculo,"",{cancel: false}) + 1

            console.log("Digite a marca do veículo: ")
            marca = readlinesync.question("");

            console.log("Digite o modelo do veículo: ")
            modelo = readlinesync.question("");

            console.log("Digite a cor do veículo: ")
            cor = readlinesync.question("");

            console.log("Digite o ano do veículo: ")
            anoFabricacao = readlinesync.questionInt("");

            console.log("Digite o preço do veículo: ")
            preco = readlinesync.questionFloat("");

            switch(tipo) {
                case 1:
                    console.log("Digite a quantidade de portas do carro: ")
                    portas = readlinesync.questionInt("");
                    console.log("Digite o tipo de câmbio do carro: ")
                    cambio = readlinesync.question("");
                    veiculos.cadastrar(new Carro(veiculos.gerarNumero(), tipo, marca, modelo, cor, anoFabricacao, preco, portas, cambio));
                break;
                case 2:
                    console.log("Digite a quantidade de cilindradas")
                    cilindrada = readlinesync.questionInt("");
                    console.log("Digite o tipo de partida")
                    partida = readlinesync.questionInt("");
                    veiculos.cadastrar(new Moto(veiculos.gerarNumero(), tipo, marca, modelo, cor, anoFabricacao, preco, cilindrada, partida));
                break;
            }

        keyPress()
        break;
        case 2:
            try {
                console.log('Listar todos os veículos');
            veiculos.listarTodos();
            }
            catch (erro) {
                console.log("Erro ao exibir a lista completa.", erro);
            }
        keyPress()
        break;
        case 3:
            console.log('Buscar por ID');

            console.log("Digite o número do ID: ")
            numero = readlinesync.questionInt("");
            veiculos.buscarPorId(numero);

        keyPress()    
        break;
        case 4:
            console.log('Atualizar dados do veículo');

            console.log("Digite o número do veículo que deseja atualizar: ")
            numero = readlinesync.questionInt("");

            let veiculo = veiculos.buscarNoArray(numero);

            if (veiculo != null) {
                tipo = veiculo.tipo;

                console.log("Digite a marca do veículo: ")
                marca = readlinesync.question("");

                console.log("Digite o modelo do veículo: ")
                modelo = readlinesync.question("");

                console.log("Digite a cor do veículo: ")
                cor = readlinesync.question("");

                console.log("Digite o ano do veículo: ")
                anoFabricacao = readlinesync.questionInt("");

                console.log("Digite o preço do veículo: ")
                preco = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite a quantidade de portas: ")
                        portas = readlinesync.questionInt("");
                        console.log("Digite o tipo de câmbio: ")
                        cambio = readlinesync.question("");
                        veiculos.atualizar(new Carro(numero, tipo, marca, modelo, cor, anoFabricacao, preco, portas, cambio));
                    break;
                    case 2:
                        console.log("Digite as cilindradas da moto: ")
                        cilindrada = readlinesync.questionInt("");
                        console.log("Digite o tipo de partida: ")
                        partida = readlinesync.questionInt("");
                        veiculos.atualizar(new Moto(numero, tipo, marca, modelo, cor, anoFabricacao, preco, cilindrada, partida));
                    break;
                }
            } else {
                console.log("O veículo "+numero+" não foi encontrado.")
            }
        keyPress()
        break;
        case 5: 
            console.log('Apagar veículo');

            console.log("Digite o ID do veículo que você quer apagar: ")
            numero = readlinesync.questionInt("");
            veiculos.deletar(numero);
        keyPress();
        break;
        default:
            console.log('Opção inválida!')
        keyPress
        break;
    }
    }
}

export function sobre(): void {
    console.log("\n*********************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Monique Ohana - moniqueohana@yahoo.com.br");
    console.log("github.com/MoniqueOhana");
    console.log("*********************************************");
}
        function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.question();
}


main ();