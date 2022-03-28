function Calcular(){
let qtdePrazo = 0
let totalPrazo = 0
let totalVista = 0
let qtdeVista = 0
for(let cont =1; cont <=3; cont++){

        let codigo = prompt('Informe P à prazo ou V á vista').toUpperCase()
        let valor= Number(prompt("Informe o valor"))
        if (codigo == "P"){
            totalPrazo = totalPrazo + valor // acumula
            qtdePrazo++
        }
        else if(codigo == "V"){   
            totalVista = totalVista + valor // acumula valor
            qtdeVista ++ // Incremento
        }
        else{
            alert("Codigo invalido, o valor informado não será contado")
        }
    }
let result= "total a vista" + totalVista + "Total prazo" + totalPrazo
result = result + "<br/ total geral " +(totalPrazo + totalVista)
let parcela = totalPrazo /3 // calcula o valor da ia . parcela
result = result + "<br/> Valor da ia. parcela à prazo" + parcela
document.getElementById("result").innerHTML = result
}