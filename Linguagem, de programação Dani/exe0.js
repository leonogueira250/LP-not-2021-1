function mediaAltura(){
    let soma = 0
    let vetor = []

    for(let i = 0; i < 10 ; i++){
        vetor.push(Number(prompt(`Informa a idade ${i+1}`)))
        soma = soma + vetor[i]
    }
    let maiorIdade = vetor[0]
    let menorIdade = vetor[0]
    for(let i=1 ; i<vetor.length; i++){
        if (vetor[i] > maiorIdade){
            maiorIdade = vetor [i] //Atualiza a maiorIdade
        }
        if (vetor[i] < menorIdade){
            menorIdade = vetor[i]
        }
    }
    //let menorIdade = vetor[0]
    //for(let i=1 ; i<vetor.length; i++){
      //  if (vetor[i] < menorIdade){
        //    menorIdade = vetor [i] //Atualiza a maiorIdade
     //   }
   // }

    
    let media = soma /10
    document.getElementById(`Result`).innerHTML = `A media é ${media} e Maior é ${maiorIdade} e Menor é ${menorIdade}`
    
    //Calcular e mostrar a maior idade
    //Percorre o vetor
    
    
    
}