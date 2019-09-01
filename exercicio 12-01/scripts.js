
function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    //var hora = data.getHours()
    var hora = 1

    
      
       if (hora >= 00 && hora <=12) {
           msg.innerHTML = `Bom dia!!  `
           msg.innerHTML += `agora são ${hora} Horas` 
           img.src = `fotomanha.jpg`
           //document.body.style.backgroundColor = `black`
           
       }  else if (hora > 12 && hora <= 18  ) {
             msg.innerHTML = `boa tarde `
             msg.innerHTML += `agora são ${hora} Horas` 
             img.src = `fototarde.jpg`
       } else {
           msg.innerHTML = `boa noite `
           msg.innerHTML += `agora são ${hora} Horas` 
           img.src = `fotonoite.jpg`

       }
}
