
function fazer() {  
                                
    //var criada para receber o elemento do html                             
    var inicio = document.getElementById('txtini') //valor pego do id do html
                  // "document" DOM pego do html pelo id
    var fim = document.getElementById('valorfim')
    var passo = document.getElementById('valorpasso')

    //variavel da reposta 
    //pegando o elemento pelo id do html da div "res"
    var res = document.getElementById(`res`)

   if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert(`[ERRO] FALTAM DADOS` ) //alerta window no navegador
    }
  else{
     //vou criar uma outra variavel para converter o valor do html para numero
      let ini = Number(inicio.value)
      let fi = Number(fim.value)
      let pass = Number(passo.value)

      res.innerHTML = `<p>seu valor é ${ini}</p>`
      res.innerHTML += `<p>seu valor é ${fi}</p>`
      res.innerHTML += `<p>seu valor é ${pass}</p>`
      for (let c = ini; c >= fi; c+= pass) {
        res.innerHTML += `${c} \u{1F449}`  
    }
     /*
       #1 criar a var contador 'c'
       #2 c = "recebe" ini que é a var convertida para Number 
       #3 c que agora é o ini tem que ser menor que o fim ('fi')
       #4 c vai receber ele mesmo (+=) mais o passo (pass)
     */
           //contagem crescente
      if (ini < fi){
      for (let c = ini; c <= fi; c += pass) {
          res.innerHTML += `${c} \u{1F449}`  
      }
         //contagem decrescente
        

    
}

}

}
