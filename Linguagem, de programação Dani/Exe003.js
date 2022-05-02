function Exe03(){
         
    let vetCodigos = []   //Declaração de vetor
    let vetEstoque = []   //Declaração de vetor

    //Sistema de repetção
    for(let i=0; i<5;i++){

        vetCodigos.push(Number(prompt(`Informe codígo do produto ${i+1}`)))
        vetEstoque.push(Number(prompt(`Informe qnte de produto ${i+1}`)))
    }

    // Tentar realizar uma compra
    let cliente = Number(prompt(`Informe o codígo do clinete`))
    do {
    let codigo = Number(prompt(`Informe codígo do produto comprado`))
    let qnte = Number(prompt(`Informe qtde do produto comprado`))

    // verificar se o produto exister
    let Achei = false
    let posicao
    for(let i=0; i<vetCodigos.length;i++){
        if (codigo == vetCodigos[i]){
            Achei = true
            posicao = i
            break
        }
    }
    if (!Achei){
        alert(`Codigo inexistente`)
    }
    else {
       if (vetEstoque[posicao] - qnte < 0){
        alert(`Não temos estoque suficiente desta mercadoria`)
       }
    else{
        vetEstoque[posicao] = vetEstoque[posicao] - qnte
        alert(`pedido atendido. Obrigado, volte sempre`)
        alert(`Estoque atualizado ${vetEstoque}`)
    }   
    }
        cliente = Number(prompt(`Informe codiigo de outro cliente. Digite 0 para encerrar`))
}
while (cliente != 0)
}

function Exe04(){
let vet = []
let vetPosicao = []

for(let i=0; i<5; i++){
    vet.push(Number(prompt(`Informe um Numero`)))
}
    for(let i=0; i<5; i++){
    if (vet[i]==30){
        vetPosicao.push(i)
    }
  }
    if (vetPosicao.length == 0){
        alert(`Nenhum número encontrado`)
}
    else{
        alert(`Foram encontrados nímeros 30 nas posições ${vetPosicao}`)

}
}
