/*n1 = 25
n2 = 7

x = n2 + n1

if (x<50) {
    console.log(`sua idade é ${x} ta mot`);
    
} else{
      // atenção na variavel entre as condiçoes
      if( x >= 50  && x <=60){
          console.log(`tas velho fdp`);
          
      } else {
          console.log(`ja morreuuu ${x}`);
          
      }
} */

 // ver hora atual
agoraHora = new Date()
var hora =  agoraHora.getHours()
if  (hora >18){
    console.log( ` Boa noite! ${hora}`);
} else {
    if (hora <= 18 && hora >= 12) {
        console.log(` boa tarde ${hora }`);
        
    } else { 
        console.log(`bom dia`);
        
    }
}


