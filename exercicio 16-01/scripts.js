let num = document.getElementById('fnum') //criação de uma var que receba os dados do html id = 'fnum'
let lista = document.getElementById('flista') // pega o id='flista' do html
let res = document.getElementById('res') //secao da resposta 

let = valores = []

 //funcao que verifca se o numero add esta no padrao  ||  #segunda funcao a ser chamada
function isNumero(numerovalores){
   if (Number(numerovalores) >= 1 && Number(numerovalores) <=100) {
     return true    
   }else{
     return false
   }
}//----end
    //funcao que verifica se o numero esta na lista   || #terceira funcao a ser chamada
function inLista(numerovalores, lis){
          //condição que verifica se o numero contem na lista|| # indexOf verifica o valor dentro do vetor
    if (lis.indexOf(Number(numerovalores)) != -1  ) {
       return true
    } else{
      return false
    }
}//---end  
                    //#primeira funcao a ser chamada
function adcionar() {  
      //  Chama a funcao que verifica se o numro esta entre o padrao definido
      /*  ATENÇÃO
                       #1 num.value = numerovalores
                       #2 valores = lis
                       #3 n e l vao ser passados como parametros               
       */
    if (isNumero(num.value) && !inLista(num.value, valores)) {
                          //chama a funcao que verifica se o numero esta na lista
       //joga os valores add para a ultima posição do vetor                   
      valores.push(Number(num.value))
           //foi criado a var 'item' para criar o elemento 'option'
       let item =document.createElement(`option`)
          /*o 'item' vai criar o texto que irá rececer o valor da var 
          num.valeu' que recebera o valor atraves do parametro 'numerovalores' */
       item.text = `Valor ${num.value} add`
         //appendechild => vai printar o valor do 'item' na seção da 'lista' do html
       lista.appendChild(item)
      
    }else{
      window.alert('Valor invalido  ou ja encotrado na lista')
    }      
    
    num.value = '' //apaga os valore
    num.focus()  //foca no compo designado
  
}//end---

function finalizar() {
  if (valores.length == 0) {
    window.alert('add valores antes de finalizar')
    
  } else{
    let tot = valores.length
    let maior = valores[0]
    let menor = valores [0]
    let soma = 0
    let media = 0
    
    for (let pos in valores) {
      soma +=valores[pos]
      if (valores[pos] > maior)  
      maior = valores[pos]
      if (valores[pos] < menor) 
      menor = valores[pos]
      }
           media = soma / tot
      res.innerHTML = `total é ${tot} <br>`
      res.innerHTML += `o maior valor é ${maior} <br>`
      res.innerHTML += `o menor valor é ${menor} <br>`
      res.innerHTML += `a soma dos valores é ${soma} <br>`
      res.innerHTML += `a media dos valores é ${media} <br>`
    }  
    

   
  }
  



