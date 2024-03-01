const Contato=require ('./modelo.js')
const contatos= []

function adicionarContato(nome, email, telefone){
    const novoContato= new Contato(nome,email,telefone)
    contatos.push(novoContato)
}
function listarContatos(){
   return contatos
}
    function buscarContato(nome){
    const buscou= contatos.find((contato)=>contato.nome===nome)
        return buscou
}
function atualizarContato(nome,email,telefone){
   
   const buscou= buscarContato(nome)
    if (buscou) {
       buscou.email=email
       buscou.telefone=telefone
    }
}
function removerContato(nome){
    const posicao=contatos.findIndex((contato)=>contato.nome===nome)
    if(posicao >=0){
        contatos.splice(posicao,1)
}
}
module.exports={adicionarContato,listarContatos,buscarContato,atualizarContato,removerContato}