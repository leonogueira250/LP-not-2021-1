function calcular(){
    let preco //Preço do ingresso - 5.0 ate 1.0
    let qnte // Qnte de ingressos - 120 até 328
    let lucro // Lucro do espetaculo
    let maiorLucro
    // Calcular

    preco= 5.0
    qnte= 120
    maiorLucro = 0
    let result = " "
    while (preco >= 1){
        lucro = (preco * qnte) -200
        if (lucro > maiorLucro){
                maiorLucro = lucro
        }
        result = result + "<tr> <td>R$"+ preco.toFixed(2) + "</td><td> " + qnte + "</td> <td>R$200.00</td> <td>R$" + lucro.toFixed(2) + "</td> </tr>" 
        qnte = qnte + 26 
        preco = preco - 0.50

    }
        //saida
        document.getElementById("result").innerHTML = result
        document.getElementById("maiorLucro").innerHTML = "R$" + maiorLucro.toFixed(2)
}