var miCancioncita;
var mifuente;
var plantas;
var paisaje;
var espiral;
var distorsion;
var puntos;
var escalera;
var puntos2;
var puntos3;
var espiral1;
var play;
var stop;
var casa;

var tamell = 30;
var blur = 3;

var filtro = 2;
var tamfuente = 100;
var tam = 10;
var tamespacio = 100;

var y = 0;
var r = 153;
var g = 255;
var b = 153;


var tamespiral = 0;
var tamespiral1 = 0;

var tam2 = 10;

var posXbot1 = 5;
var porYbot1 = 20;
var tambot1 = 40;
var tambot2 = 40;

var posXbot2 = 5;
var posYbot2 = 80;
var tambot3 = 40;


var herramienta = 1;

function preload() {

    plantas = loadImage('assets/plantas.JPG');
    distorsion = loadImage('assets/distorsion.jpeg');
    espiral = loadImage('assets/espiral3.jpg');
    miCancioncita = loadSound('assets/white.mp3');
    mifuente = loadFont('assets/compu.ttf');
    puntos = loadImage('assets/puntos.jpg');
    escalera = loadImage('assets/escaleras.jpg');
    puntos2 = loadImage('assets/puntos2.jpg');
    puntos3 = loadImage('assets/puntos3.jpg');
    paisaje = loadImage('assets/paisaje1.JPG');
  espiral1 = loadImage('assets/espiral.jpg');
  play = loadImage('assets/play.jpg');
  stop = loadImage('assets/stop1.jpeg');
  casa = loadImage('assets/house.jpeg');


}

function setup() {
    createCanvas(windowWidth, windowHeight);

    miCancioncita.play();

    miAmplitud = new p5.Amplitude();
    miAmplitud.setInput(miCancioncita);

}

function draw() {
    background(0);

  push();
  noFill()
  image(stop, posXbot1, porYbot1, tambot2, tambot1);
    rect(posXbot1, porYbot1, tambot2, tambot1); //Botón parar;
  image(play, posXbot2, posYbot2, tambot3, tambot3);
    rect(posXbot2, posYbot2, tambot3, tambot3, 20); //Botón play
    pop();


    var sc = second();
    var sccolor = map(sc, 0, 60, 0, 255);
    var filtro1 = map(miAmplitud.getLevel(), 0, 1, 2, 10);
   var filtro2 = map(miAmplitud.getLevel(), 0, 1, 2, 20);
    var tames = map(miAmplitud.getLevel(), 0, 1, width - 120, width - 123);



    var miVol = map(mouseY, height, 0, 0.0, 1.0); //volumen en mouse y
    miCancioncita.setVolume(miVol);

    if (mouseIsPressed == true) {

        if (herramienta == 1) {
            miCancioncita.stop();
        }

        if (herramienta == 2) {
            miCancioncita.play();
        }
    }



    if (miCancioncita.currentTime() > 0) {
        fill(0, 45, 179);
        rect(50, 0, width - 120, height);
    }

    if (miCancioncita.currentTime() > 4) {
        textFont(mifuente);
        textSize(tamfuente);
        fill(255, 255, 255);
        text("Play", 150, 200);
    }

    if (miCancioncita.currentTime() > 4.5) {
        tamfuente = 55;
    }

    if (miCancioncita.currentTime() > 5) {
        fill(0);
        rect(50, 0, width - 120, height);
    }

    if (miCancioncita.currentTime() > 5.5) {

        fill(153, 255, 153);
        rect(50, 0, width - 120, height);
        textFont(mifuente);
        textSize(tamfuente);
        fill(0, 0, 0, 100);
        text("Play", 150, 200);
    }


    if (miCancioncita.currentTime() > 6) {
        fill(0);
        rect(50, 0, width - 120, height);
    }

    if (miCancioncita.currentTime() > 6.5) {
        image(distorsion, 50, 0, width - 120, height);
        fill(0, 0, 0, 100);
        rect(50, y, width - 120, 10);
        rect(50, y + 20, width - 120, 10);
        y = y + 3;
    }


    if (miCancioncita.currentTime() > 8) {
        image(distorsion, 50, 0, width - 120, height);
        fill(0, 0, 0, 100);
        rect(50, y, width - 120, 10);
        rect(50, y + 20, width - 120, 10);
        y = y + 3;
    }

    if (miCancioncita.currentTime() > 8.2) {
        image(plantas, 50, 0, width - 120, height);
    }

    if (miCancioncita.currentTime() > 8.5) {
        var tamrect = map(miAmplitud.getLevel(), 0, 1, 550, 600);
        //rect(30, 0, tamrect, height);
        image(plantas, 50, 0, width - 120, height);
        filter(BLUR, blur);
    }

    if (miCancioncita.currentTime() > 8.7) {
        blur = blur - 0.8;
        if (blur = 1) {
            image(plantas, 50, 0, width - 120, height);
        }
    }

    if (miCancioncita.currentTime() > 9) {
        image(plantas, 50, 0, width - 120, height);
    }

    if (miCancioncita.currentTime() > 11) {
        var tamrect = map(miAmplitud.getLevel(), 0, 1, 550, 600);
        //rect(30, 0, tamrect, height);
        image(plantas, 50, 0, width - 120, height);
        filter(BLUR, blur);
    }

    if (miCancioncita.currentTime() > 12) {
        image(plantas, 50, 0, width - 120, height);
    }

    if (miCancioncita.currentTime() > 13) {
        image(plantas, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro1);
    }

    if (miCancioncita.currentTime() > 22) {
        image(paisaje, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro2);

    }

    if (miCancioncita.currentTime() > 23.5) {
        var tames = map(miAmplitud.getLevel(), 0, 1, width - 118, width - 120);
      //tint (204, 153, 255, 250);
      push();
       tint(255, 255, 204, 250)
        image(espiral, 50, 0, tames, height);
        filter(POSTERIZE, filtro1);
      pop();
    }
  
    if (miCancioncita.currentTime() > 29) {
        image(paisaje, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro2);

    }

    if (miCancioncita.currentTime() > 34) {
        push();
        image(espiral1, 50, 0, tames, height);
        tint(204, 255, 255, 200);
        image(puntos, 50, 0, width - 110, height);
        filter(POSTERIZE, filtro2);
        pop();
    }
    push();
    if (miCancioncita.currentTime() > 35) {
        tint(204, 255, 255);
        image(puntos, 50, 0, width - 110, height);
        filter(POSTERIZE, filtro2);
    }
  
  if (miCancioncita.currentTime() > 36) {
      tint(204, 255, 255);
        var tames = map(miAmplitud.getLevel(), 0, 1,  width - 118, width - 120);
        image(puntos2, 50, 0, tames, height);
        filter(POSTERIZE, filtro2);
    }
    if (miCancioncita.currentTime() > 37) {
        var tames = map(miAmplitud.getLevel(), 0, 1,  width - 118, width - 120);
       tint(204, 255, 255);
        image(puntos3, 50, 0, tames, height);
        filter(POSTERIZE, filtro2);
    }
pop(); 
  
    if (miCancioncita.currentTime() > 38) {  
          var filtro4 = map(miAmplitud.getLevel(), 0, 1, 2, 20);
        image(casa, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro4);
      
    }
  
       if (miCancioncita.currentTime() > 44) {
         push();
         var filtro3 = map(miAmplitud.getLevel(), 0, 1, 2, 20);
        image(plantas, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro3);
         pop();
    }
  
    if (miCancioncita.currentTime() > 50) {
        image(paisaje, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro2);

    }
  
  

  if (miCancioncita.currentTime() > 57) {
    push();
        image(plantas, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro1);
    pop();
    }
  
   if (miCancioncita.currentTime() > 62) {
        push();
        tint(sccolor, 255, 255, 80);
        image(puntos2, 50, 0, width - 110, height);
        pop();
    }
      
  

    if (miCancioncita.currentTime() > 63) {
        fill(r, g, b);
        rect(50, 0, width - 120, height);
        noStroke();
        fill(r, g, b);
        rect(50, y, width - 120, 10);
        rect(50, y + 20, width - 120, 10);
        y = y + 5;
        b = b - 1;

        if (y > height) {
            y = 0;
        }
      
      if (miCancioncita.currentTime() > 64) {
        image(distorsion, 50, 0, width - 120, height);
        fill(0, 0, 0, 100);
        rect(50, y, width - 120, 10);
        rect(50, y + 20, width - 120, 10);
        y = y + 3;
    }
    }


    if (mouseX > posXbot1 && mouseX < posXbot1 + tambot1 &&
        mouseY > porYbot1 && mouseY < porYbot1 + tambot1) {
        herramienta = 1;
    }


    if (mouseX > posXbot2 && mouseX < posXbot2 + tambot3 &&
        mouseY > posYbot2 && mouseY < posYbot2 + tambot3) {
        herramienta = 2;
    }



    if (miCancioncita.currentTime() > 68) {
        miCancioncita.stop();
    }

}
