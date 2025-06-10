import readlinesync = require('readline-sync');

export function main() {
    let opcao: number;

    while (true) {
        console.log(`_____________________________________________
            
\t1 - cadastrar novo veiculo
\t2 - listar todos os veículos
\t3 - buscar por numero
\t4 - atualizar dados do veículo
\t5 - deletar veículo
\t0 - sair
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
        break;
        case 2:
            console.log('Listar todos os veículos');
        break;
        case 3:
            console.log('Buscar por numero');
        break;
        case 4:
            console.log('Atualizar dados do veículo');
        break;
        case 5: 
            console.log('Apagar veículo');
        break;
        default:
            console.log('Opção inválida!')
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
main ();