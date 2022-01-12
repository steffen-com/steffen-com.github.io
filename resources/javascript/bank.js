var pinkode = prompt("ka er pinkoden din?");
var penger = 4000;

function skjekBank(){
    var userpin = document.getElementById("pinkode").value;
    if (userpin == pinkode) {
        alert("koden er rett")
    } 
    else if (pinkode < userpin ) {
        alert("feil pinkode")
        n
    }
    else if (pinkode > userpin ) {
        alert("feil pinkode")
        n
    }
   
    var penger = document.getElementById("penger").value;
    if (penger >= 1500) {
        alert("du har ikkje nok pengar")
    }
   
    else if (penger <=1500) {
        alert("du har toke ut penger")
    }
   
  
       
    
}
var username = prompt("ka er navne ditt") 
document.getElementById("username")