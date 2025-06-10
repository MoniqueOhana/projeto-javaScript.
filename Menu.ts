import readlinesync = require('readline-sync');
import { Veiculo } from './src/model/Veiculo';
import { Moto } from './src/model/Moto';
import { Carro } from './src/model/Carro';

export function main() {
    let opcao: number;

    const carro1: Carro = new Carro (1,1,"Honda","Civic",'Preto', 2010, 58500, 4, "Manual");
    carro1.visualizar();
    const carro2: Carro = new Carro(2,1,"Hyundai","Veloster",'Vermelho', 2013, 62900, 3, "Manual");
    carro2.visualizar();

    const moto: Moto = new Moto(3,2,'Kawazaki',"Ninja",'Verde', 2022, 35900, 600, 1)
    moto.visualizar();
    const carro: Carro = new Carro(4,1,"Kia", "Cerato", "Cinza", 2019, 79500, 4, "Automático")
    carro.visualizar();

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
        keyPress()
        break;
        case 2:
            console.log('Listar todos os veículos');
        keyPress()
        break;
        case 3:
            console.log('Buscar por numero');
        keyPress()    
        break;
        case 4:
            console.log('Atualizar dados do veículo');
        keyPress()
        break;
        case 5: 
            console.log('Apagar veículo');
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