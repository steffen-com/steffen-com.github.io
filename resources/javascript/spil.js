let spil = ["mincraft", "risk", "gta",];
    document.getElementById("spil").innerHTML = spil;

    function myFun(){
        spil.reverse();
        document.getElementById("spil").innerHTML = spil;
    }
   
    let name = prompt("hi")
    document.getElementById("name").innerText = name

    let text = "";
    let i = 0;
    while (i < 22) {
        text += "The number is " + i;
        i++;
        text.reverse();
    }

    document.getElementById("nomer").innerHTML = text;
