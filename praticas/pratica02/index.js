const readline= require('readline-sync')
const contatoControlador = require('./controlador')

function menu(){
    console.log('1. adicionar contato')
    console.log('2. listar contato')
    console.log('3. buscar contato')
    console.log('4. atualizar contato')
    console.log('5. remover contato')
    console.log('6. sair')    

}
function escolherOpcao(opcao){
    switch(opcao){
        case '1':
        readline.question("Informe seu nome:")
        readline.question("Informe seu email:")
        readline.question("Informe seu telefone:")
        controlador.adicionarContato()
        break;
        case '2': 
        controlador.listarContato()
        console.log()
        break;
        case '3':
        controlador.buscarContato()
         break;
        case '4':
        controlador.atualizarContato()
         break;
        case '5':
        controlador.removerContato()
        break;
        case '6': process.exit(0);
        default: console.log('Opcao invalida');
    }
    readline.question('pressione ENTER para continuar..')
}
function main(){
    while (true) {
        menu();
        const opcao= readline.question("entre com uma opcao:")
        escolherOpcao(opcao);
    }
}
main()