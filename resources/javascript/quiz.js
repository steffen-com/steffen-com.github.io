function skjekSvar(){

var poeng = 0;

var sp1 = document.getElementById("bloons td 6").checked;
console.log(sp1);
if(sp1 == true){
    poeng = poeng + 1;
} 
var sp1 = document.getElementById("bloons td 5").checked;
console.log(sp1);
if(sp1 == true){
    document.getElementById("spil").innerText = "svare er feil";
} 

var sp2 = document.getElementById("bombe").checked;
console.log(sp2);
if(sp2 == true){
    poeng = poeng + 1;
} 
var sp2 = document.getElementById("dartmonky").checked;
console.log(sp2);
if(sp2 == true){
    document.getElementById("monkyq").innerText = "svare er feil";
} 

var sp3 = document.getElementById("glugunner").checked;
console.log(sp3);
if(sp3 == true){
    document.getElementById("monky").innerText = "svare er feil";
} 

var sp3 = document.getElementById("moter").checked;
console.log(sp3);
if(sp3 == true){
    poeng = poeng + 1
}

var sp4 = document.getElementById("sauda").checked;
console.log(sp4);
if(sp4 == true){
    poeng = poeng + 1
}

var sp4 = document.getElementById("pat").checked;
console.log(sp4);
if(sp4 == true){
    document.getElementById("besthero").innerText = "svare er feil";
}

var sp5 = document.getElementById("ben").checked;
console.log(sp5);
if(sp5 == true){
    document.getElementById("hero").innerText = "svare er feil";
}

var sp5 = document.getElementById("quincy").checked;
console.log(sp5);
if(sp5 == true){
    poeng = poeng + 1
}

var sp6 = document.getElementById("hpq").checked;
console.log(sp6);
if(sp6 == true){
    document.getElementById("hp").innerText = "svare er feil";
}

var sp6 = document.getElementById("hpw").checked;
console.log(sp6);
if(sp6 == true){
    poeng = poeng + 1
}

var sp6 = document.getElementById("hpe").checked;
console.log(sp6);
if(sp6 == true){
    document.getElementById("hp").innerText = "svare er feil";
}

 document.getElementById("poeng").innerText = "du fek " + poeng + " poeng"; 
 
}










