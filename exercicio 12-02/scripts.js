function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById(`txtano`)
    //mais moderno
    var res = document.querySelector(`div#res`)

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert(`ERRO! Verifique os dados e tente novamente`)
        
    } else{
        var fsex = document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement(`img`)
        img.setAttribute('id', 'foto') 
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <=10) {
            //crianca
            img.setAttribute(`src`, `bbh.png`)
            }  else if ( idade <=21) {
                //jovem
                img.setAttribute(`src`, `jovemh.png`)
            } else if (idade <= 50) {
                //adulto
                img.setAttribute(`src`, `adulth.png`)
            } else if (idade <= 100){
               //velho
               img.setAttribute(`src`, `velho.png`)
            } else{
                //erro
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher' 
            if (idade >= 0 && idade <=10) {
                //crianca
                img.setAttribute(`src`, `bbm`)
                }  else if ( idade <=21) {
                    //jovem
                    img.setAttribute(`src`, `jovemm.png`)
                } else if (idade <= 50) {
                    //adulto
                    img.setAttribute(`src`, `adultom.png`)
                } else if (idade <= 100){
                   //velha
                   img.setAttribute(`src`, `velha.png`)
                } else{
                    //erro
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um ${genero} com idade ${idade} anos`
        res.innerHTML += ' .. '
        res.appendChild(img)

    } 
}