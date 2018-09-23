var miCancioncita;
var mifuente;
var plantas;
var paisaje;
var espiral;
var distorsion;
var distorsion2;
var puntos;
var escalera;
var puntos2;
var puntos3;
var puntos4;
var puntos5;
var puntos6;
var palmeras;
var palmeras2;
var espiral1;
var medusa;
var nube;
var play;
var stop;
var casa;
var arboles;
var puente2;
var tiempo;
var ondas;
var sombra;

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
    distorsion2 = loadImage('assets/x.jpg');
    espiral = loadImage('assets/espiral4.jpg');
    miCancioncita = loadSound('assets/white.mp3');
    mifuente = loadFont('assets/compu.ttf');
    puntos = loadImage('assets/puntos.jpg');
    puntos2 = loadImage('assets/puntos2.jpg');
    puntos3 = loadImage('assets/puntos3.jpg');
    puntos4 = loadImage('assets/puntos4.jpg');
    puntos5 = loadImage('assets/puntos5.jpg');
    puntos6 = loadImage('assets/puntos6.jpg');
    palmeras = loadImage('assets/palmeras.jpg');
    palmeras2 = loadImage('assets/palmeras2.jpg');
    paisaje = loadImage('assets/paisaje1.JPG');
    espiral1 = loadImage('assets/espiral.jpg');
    nube = loadImage('assets/nube.jpg');
    medusa = loadImage('assets/medusa.jpg');
    play = loadImage('assets/play.jpg');
    stop = loadImage('assets/stop1.jpeg');
    casa = loadImage('assets/house.jpeg');
    arboles = loadImage('assets/arboles2.jpg');
    puente2 = loadImage('assets/puente2.jpg');
    tiempo = loadImage('assets/tiempo.jpg');
    ondas = loadImage('assets/ondas.jpg');
    sombra = loadImage('assets/sombra.jpg');



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
    //image(play, posXbot2, posYbot2, tambot3, tambot3);
    //rect(posXbot2, posYbot2, tambot3, tambot3, 20); //Botón play
    pop();


    var sc = second();
    var sccolor = map(sc, 0, 60, 0, 255);
    var filtro1 = map(miAmplitud.getLevel(), 0, 1, 2, 10);
    var filtro2 = map(miAmplitud.getLevel(), 0, 1, 2, 20);
    var filtro6 = map(miAmplitud.getLevel(), 0, 1, 2, 30);
    var tames = map(miAmplitud.getLevel(), 0, 1, width - 120, width - 123);

    var miVol = map(mouseY, height, 0, 0.0, 1.0); //volumen en mouse y
    miCancioncita.setVolume(miVol);


    if (mouseIsPressed == true) {

        if (herramienta == 1) {
            miCancioncita.stop();
        }
    }



    if (miCancioncita.currentTime() > 0 && miCancioncita.currentTime() < 5) {
        fill(0, 45, 179);
        rect(50, 0, width - 120, height);
    }

    if (miCancioncita.currentTime() > 4 && miCancioncita.currentTime() < 6) {
        textFont(mifuente);
        textSize(tamfuente);
        fill(255, 255, 255);
        text("Play", 150, 200);
    }

    if (miCancioncita.currentTime() > 4.5 && miCancioncita.currentTime() < 6) {
        tamfuente = 55;
    }

    if (miCancioncita.currentTime() > 5 && miCancioncita.currentTime() < 5.5) {
        fill(0);
        rect(50, 0, width - 120, height);
    }

    if (miCancioncita.currentTime() > 5.5 && miCancioncita.currentTime() < 6) {

        fill(153, 255, 153);
        rect(50, 0, width - 120, height);
        textFont(mifuente);
        textSize(tamfuente);
        fill(0, 0, 0, 100);
        text("Play", 150, 200);
    }

    if (miCancioncita.currentTime() > 6 && miCancioncita.currentTime() < 6.5) {
        fill(0);
        rect(50, 0, width - 120, height);
    }

    if (miCancioncita.currentTime() > 6.5 && miCancioncita.currentTime() < 8) {
        image(distorsion, 50, 0, width - 120, height);
        fill(0, 0, 0, 100);
        rect(50, y, width - 120, 10);
        rect(50, y + 20, width - 120, 10);
        y = y + 3;
    }


    if (miCancioncita.currentTime() > 8 && miCancioncita.currentTime() < 8.2) {
        image(distorsion, 50, 0, width - 120, height);
        fill(0, 0, 0, 100);
        rect(50, y, width - 120, 10);
        rect(50, y + 20, width - 120, 10);
        y = y + 3;
    }

    if (miCancioncita.currentTime() > 8.2 && miCancioncita.currentTime() < 9.2) {
        image(plantas, 50, 0, width - 120, height);

    }

    if (miCancioncita.currentTime() > 9.2 && miCancioncita.currentTime() < 10) {
      push();
        image(plantas, 50, 0, width - 120, height);
        filter(BLUR, 3);
      pop();
    }



    if (miCancioncita.currentTime() > 10 && miCancioncita.currentTime() < 12) {
        image(plantas, 50, 0, width - 120, height);
    }


    if (miCancioncita.currentTime() > 12 && miCancioncita.currentTime() < 24) {
        image(plantas, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro1);
    }


    if (miCancioncita.currentTime() > 24 && miCancioncita.currentTime() < 27) {
        push();
        var filtro7 = map(miAmplitud.getLevel(), 0, 1, 2, 50);
        tint(255, 255, 204, 250)
        image(arboles, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro7);
        pop();
    }

    if (miCancioncita.currentTime() > 27 && miCancioncita.currentTime() < 29) {
        var filtro4 = map(miAmplitud.getLevel(), 0, 1, 2, 40);
        image(nube, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro4);
    }

    if (miCancioncita.currentTime() > 29 && miCancioncita.currentTime() < 31) {
        image(palmeras, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro6);
    }

    if (miCancioncita.currentTime() > 31 && miCancioncita.currentTime() < 35) {
        image(puente2, 50, 0, width - 120, height);
        //filter(POSTERIZE, filtro6);
    }


    if (miCancioncita.currentTime() > 35 && miCancioncita.currentTime() < 36) {
        push();
        image(espiral1, 50, 0, tames, height);
        tint(204, 255, 255, 200);
        image(puntos, 50, 0, width - 110, height);
        filter(POSTERIZE, filtro6);
        pop();
    }

    if (miCancioncita.currentTime() > 36 && miCancioncita.currentTime() < 40) {
        push();
        tint(255, 204, 153, 200);
        image(puntos, 50, 0, width - 110, height);
        filter(POSTERIZE, filtro6);
        pop();
    }


    if (miCancioncita.currentTime() > 40 && miCancioncita.currentTime() < 41) {
        push();
        image(casa, 50, 0, width - 120, height);
        tint(204, 255, 255, 180);
        image(puntos, 50, 0, width - 110, height);
        filter(POSTERIZE, filtro6);
        pop();
    }

    if (miCancioncita.currentTime() > 41 && miCancioncita.currentTime() < 43) {
        push();
        tint(204, 255, 255, 180);
        image(sombra, 50, 0, width - 110, height);
        filter(POSTERIZE, filtro6);
        pop();
    }

    if (miCancioncita.currentTime() > 43 && miCancioncita.currentTime() < 44) {
        push();
        tint(255, 230, 230, 200);
        image(puntos, 50, 0, width - 110, height);
        filter(POSTERIZE, filtro6);
        pop();
    }


    if (miCancioncita.currentTime() > 44 && miCancioncita.currentTime() < 45) {
        push();
        tint(255, 230, 230, 200);
        var tames = map(miAmplitud.getLevel(), 0, 1, width - 118, width - 120);
        image(puntos2, 50, 0, tames, height);
        filter(POSTERIZE, filtro6);
        pop();
    }
    if (miCancioncita.currentTime() > 45 && miCancioncita.currentTime() < 46) {
        push();
        var tames = map(miAmplitud.getLevel(), 0, 1, width - 118, width - 120);
        tint(255, 230, 230, 200);
        image(puntos3, 50, 0, tames, height);
        filter(POSTERIZE, filtro6);
        pop();
    }

    if (miCancioncita.currentTime() > 46 && miCancioncita.currentTime() < 47) {
        push();
        tint(255, 230, 230, 200);
        image(puntos4, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro6);
        pop();
    }

    if (miCancioncita.currentTime() > 47 && miCancioncita.currentTime() < 48) {
        push();
        tint(255, 204, 153, 200);
        image(puntos, 50, 0, width - 110, height);
        filter(POSTERIZE, filtro2);
        pop();
    }

    if (miCancioncita.currentTime() > 48 && miCancioncita.currentTime() < 49) {
        push();
        tint(204, 255, 255);
        image(puntos5, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro2);
        pop();
    }


    if (miCancioncita.currentTime() > 49 && miCancioncita.currentTime() < 50) {
        push()
        tint(204, 255, 255);
        image(puntos6, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro2);
        pop();
    }

    if (miCancioncita.currentTime() > 50 && miCancioncita.currentTime() < 51) {
        push()
        tint(204, 255, 255);
        image(ondas, 50, 0, width - 120, height);
        pop();
    }

    if (miCancioncita.currentTime() > 51 && miCancioncita.currentTime() < 52) {
        push()
        tint(204, 255, 255);
        image(puntos5, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro2);
        pop();
    }

    if (miCancioncita.currentTime() > 52 && miCancioncita.currentTime() < 53) {
        push()
        tint(204, 255, 255);
        image(puntos6, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro2);
        pop();
    }

    if (miCancioncita.currentTime() > 53 && miCancioncita.currentTime() < 56) {
        push()
        tint(204, 255, 255);
        image(ondas, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro6);
        pop();
    }

    if (miCancioncita.currentTime() > 56 && miCancioncita.currentTime() < 61) {
        image(tiempo, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro6);

    }


    if (miCancioncita.currentTime() > 61 && miCancioncita.currentTime() < 64) {
        image(paisaje, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro1);

    }

    if (miCancioncita.currentTime() > 64 && miCancioncita.currentTime() < 67) {
        var filtro4 = map(miAmplitud.getLevel(), 0, 1, 2, 20);
        image(casa, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro4);
    }

    if (miCancioncita.currentTime() > 67 && miCancioncita.currentTime() < 72) {
        var filtro4 = map(miAmplitud.getLevel(), 0, 1, 2, 20);
        image(nube, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro4);
    }

    if (miCancioncita.currentTime() > 72 && miCancioncita.currentTime() < 74) {
        push();
        tint(204, 255, 255, 100);
        image(ondas, 50, 0, width - 120, height);
        var tames = map(miAmplitud.getLevel(), 0, 1, width - 118, width - 120);
        image(puntos2, 50, 0, tames, height);
        filter(POSTERIZE, filtro6);
        pop();
    }

    if (miCancioncita.currentTime() > 74 && miCancioncita.currentTime() < 76) {
        tint(204, 255, 255);
        image(ondas, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro6);
    }



    if (miCancioncita.currentTime() > 76 && miCancioncita.currentTime() < 77) {
        image(distorsion2, 50, 0, width - 120, height);
        filter(POSTERIZE, filtro1);
    }

    if (miCancioncita.currentTime() > 77 && miCancioncita.currentTime() < 78) {
        image(distorsion, 50, 0, width - 120, height);
        fill(0, 0, 0, 100);
        rect(50, y, width - 120, 10);
        rect(50, y + 20, width - 120, 10);
        y = y + 3;
    }



    if (mouseX > posXbot1 && mouseX < posXbot1 + tambot1 &&
        mouseY > porYbot1 && mouseY < porYbot1 + tambot1) {
        herramienta = 1;
    }




    if (miCancioncita.currentTime() > 78) {
        miCancioncita.stop();
    }

}