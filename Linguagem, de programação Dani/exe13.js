function calcular(){
    // Recuperar o que o usuario digita e converte para número
    let numero = Number(document.getElementById("numero").value)
    //Gerar a tabuada
    let tabuada = numero +  " x 0 = " + numero*0
   
    tabuada = tabuada + "<br/>" + numero + " x 1 = " + numero*1

    tabuada = tabuada + "<br/>" + numero + " x 2 = " + numero*2

    tabuada = tabuada + "<br/>" + numero + " x 3 = " + numero*3

    tabuada = tabuada + "<br/>" + numero + " x 4 = " + numero*4

    tabuada = tabuada + "<br/>" + numero + " x 5 = " + numero*5

   tabuada = tabuada + "<br/>" + numero + " x 6 = " + numero*6
    
   tabuada = tabuada + "<br/>" + numero + " x 7 = " + numero*7

   tabuada = tabuada + "<br/>" + numero + " x 8 = " + numero*8

   tabuada = tabuada + "<br/>" + numero + " x 9 = " + numero*9

   tabuada = tabuada + "<br/>" + numero + " x 10 = " + numero*10


    document.getElementById("saida").innerHTML = tabuada
}