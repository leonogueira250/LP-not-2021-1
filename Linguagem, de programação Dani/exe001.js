function Numeros(){
    let vetor = []
    let pares = []
    let impares = []
    //Entrada de dados
    for(i = 0; i < 6; i++){
        vetor.push(Number(prompt(`Informe os numeros inteiros ${i+1}`)))}
    //processamento 
        for(i = 0; i < 6; i++){
        if (vetor[i]%2==0){
            pares.push(vetor[i])
        }  
        else{
            impares.push(vetor[i])
        }


    }
    document.getElementById(`Result`).innerHTML = `Os Numeros pares são ${pares} - Suas qndades ${pares.length} 
    -Os numeros impares são ${impares} - Suas qndades ${impares.length}`
    

}