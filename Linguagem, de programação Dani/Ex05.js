function Exe04(){

    let vetlogica = []
    let vetLinguagem = []
    let vetInterseccao = []


    for(let i=0; i<10; i++){
        vetlogica.push(Number(prompt(`Informe o codígo do aluno que fez disciplina de logica`)))
    }
    for(let i=0 ; i<5; i++){
        vetLinguagem.push(Number(prompt(`Informe o codígo do aluno que faz disciplina de logica`)))
        
    }
    for(let i=0; i<10;i++){
        for(let j=0; j<5; j++){
            if (vetlogica[i] == vetLinguagem[j]){
                vetInterseccao.push(vetlogica[i])
             }
            }
        }
            alert(`O vetor intersecção é ${vetInterseccao}`)
    }
