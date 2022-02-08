// bruke canvas til å tegna på nettsido
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.moveTo(200,20);
ctx.lineTo(200,200);

// bruker moveTO og lineTo til å laga haovudbygge og alle halane 

// Hall 0   1 etasje
ctx.moveTo(200,200);
ctx.lineTo(700,200);
ctx.moveTo(700,20);
ctx.lineTo(700,200);
ctx.moveTo(200,20);
ctx.lineTo(700,20);

ctx.moveTo(200,20);
ctx.lineTo(170,50);
ctx.moveTo(170,50);
ctx.lineTo(170,220);
ctx.moveTo(170,220);
ctx.lineTo(200,200);
ctx.moveTo(170,220);
ctx.lineTo(680,220);
ctx.moveTo(680,220);
ctx.lineTo(700,200);


// 2 etasje
ctx.moveTo(800,20);
ctx.lineTo(800,200);
ctx.moveTo(1300,20);
ctx.lineTo(1300,200);
ctx.moveTo(800,200);
ctx.lineTo(1300,200);
ctx.moveTo(800,20);
ctx.lineTo(1300,20);

ctx.moveTo(800,20);
ctx.lineTo(770,50);
ctx.moveTo(770,50);
ctx.lineTo(770,220);
ctx.moveTo(770,220);
ctx.lineTo(800,200);
ctx.moveTo(770,220);
ctx.lineTo(1280,220);
ctx.moveTo(1280,220);
ctx.lineTo(1300,200);

// 3 etasje
ctx.moveTo(1400,20);
ctx.lineTo(1400,200);
ctx.moveTo(1900,20);
ctx.lineTo(1900,200);
ctx.moveTo(1400,200);
ctx.lineTo(1900,200);
ctx.moveTo(1400,20);
ctx.lineTo(1900,20);

ctx.moveTo(1400,20);
ctx.lineTo(1370,50);
ctx.moveTo(1370,50);
ctx.lineTo(1370,220);
ctx.moveTo(1370,220);
ctx.lineTo(1400,200);
ctx.moveTo(1370,220);
ctx.lineTo(1880,220);
ctx.moveTo(1880,220);
ctx.lineTo(1900,200);


//Hall 1
ctx.moveTo(150,380);
ctx.lineTo(150,700);
ctx.moveTo(200,300);
ctx.lineTo(200,380);
ctx.moveTo(150,380);
ctx.lineTo(200,380);
ctx.moveTo(350,300);
ctx.lineTo(350,700);
ctx.moveTo(200,300);
ctx.lineTo(350,300);
ctx.moveTo(150,700);
ctx.lineTo(350,700);

ctx.moveTo(150,700);
ctx.lineTo(170,720);
ctx.moveTo(350,700);
ctx.lineTo(370,720);
ctx.moveTo(170,720);
ctx.lineTo(370,720);
ctx.moveTo(370,320);
ctx.lineTo(370,720);
ctx.moveTo(350,300);
ctx.lineTo(370,320);


// Hall 2
ctx.moveTo(450,380);
ctx.lineTo(450,700);
ctx.moveTo(600,380);
ctx.lineTo(600,700);
ctx.moveTo(450,380);
ctx.lineTo(600,380);
ctx.moveTo(450,700);
ctx.lineTo(600,700);
ctx.moveTo(450,700);
ctx.lineTo(600,700);

ctx.moveTo(430,400);
ctx.lineTo(430,720);
ctx.moveTo(450,380);
ctx.lineTo(430,400);
ctx.moveTo(450,700);
ctx.lineTo(430,720);
ctx.moveTo(600,700);
ctx.lineTo(580,720);
ctx.moveTo(580,720);
ctx.lineTo(430,720);


// Hall 3
ctx.moveTo(450,760);
ctx.lineTo(450,850);
ctx.moveTo(730,760);
ctx.lineTo(730,850);
ctx.moveTo(450,760);
ctx.lineTo(730,760);
ctx.moveTo(450,850);
ctx.lineTo(730,850);

ctx.moveTo(450,760);
ctx.lineTo(430,780);
ctx.moveTo(430,780);
ctx.lineTo(430,870);
ctx.moveTo(450,850);
ctx.lineTo(430,870);
ctx.moveTo(430,870);
ctx.lineTo(710,870);
ctx.moveTo(730,850);
ctx.lineTo(710,870);



// bygning 4
ctx.moveTo(120,750);
ctx.lineTo(120,830);
ctx.moveTo(245,750);
ctx.lineTo(245,830);
ctx.moveTo(120,750);
ctx.lineTo(245,750);
ctx.moveTo(120,830);
ctx.lineTo(245,830);
ctx.moveTo(200,300);
ctx.lineTo(350,300);

ctx.moveTo(110,760);
ctx.lineTo(120,750);
ctx.moveTo(110,760);
ctx.lineTo(110,840);
ctx.moveTo(110,840);
ctx.lineTo(120,830);
ctx.moveTo(235,840);
ctx.lineTo(245,830);
ctx.moveTo(110,840);
ctx.lineTo(235,840);


// bruke font og fillText til å skriva ut tekst til nettsido
ctx.font = "30px verdana";
ctx.fillText("Hovudbygget aka Hall 0 ", 280,50);

ctx.font = "30px verdana";
ctx.fillText("Hall 1", 240, 360);

ctx.font = "30px verdana";
ctx.fillText("Hall 2", 495, 450);

ctx.font = "30px verdana";
ctx.fillText("Hall 3", 550, 800);

ctx.font = "30px verdana";
ctx.fillText("Etasje 1", 380, 100);

ctx.font = "30px verdana";
ctx.fillText("Etasje 2", 1000, 50);

ctx.font = "30px verdana";
ctx.fillText("Etasje 3", 1600, 50);

ctx.font = "30px verdana";
ctx.fillText("Bygg 4", 130, 800);


ctx.stroke();
