
function tabuada() {  
                                
    //var criada para receber o elemento do html                             
    var valortb = document.getElementById('txt') //valor pego do id do html
    var valortabu = document.getElementById('txtabu')
    //variavel da reposta 
    //pegando o elemento pelo id do html da div "res"
    var res = document.getElementById(`res`)

   if (valortb.value.length == 0){
        res.innerHTML = (`[ERRO] FALTAM DADOS! Digite um numero!` ) //alerta window no navegador
    }
  else{
     //vou criar uma outra variavel para converter o valor do html para numero
      let A = Number(valortb.value)
      let fi = Number(valortabu.value)
      let multi
    

      res.innerHTML = `<p>seu valor é ${A}</p>`
     /*
       #1 criar a var contador 'c'
       #2 c = "recebe" ini que é a var convertida para Number 
       #3 c que agora é o ini tem que ser menor que o fim ('fi')
       #4 c vai receber ele mesmo (+=) mais o passo (pass)
     */
           //contagem crescente
      if (A >= 0 && A <= 10){
        do {
          multi = A * fi
          res.innerHTML += `tabuada: ${A} * ${fi} = ${multi}<br>`
          A++
        } while ( A <= fi);
      }else{
       alert(`erro`)
      }
      
    

}



}//fecha tabuda
