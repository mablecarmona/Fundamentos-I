var y = 10;
var tamrect = 10;
var x = 0;

var angulo = 0;



function setup() {
    createCanvas(420, 370);
    background(220);

}

function draw() {

    noStroke();

    var hr = hour();
    var mn = minute();
    var sc = second();
    var dia = day();

  
    var sccolor = map(sc, 0, 60, 0, 255);
    var mncolor = map(mn, 0, 60, 0, 255);
    var diacolor = map(dia, 1, 30, 0, 255);

    push();
    fill(diacolor, 224, 224, 80);
    for (i = 0; i < width; i = i + 2) {
        //rect(i * 10, 0, 10, 10);
        rect(0, i * 10, 10, 10);
        rect(i * 10 - 10, 11, 10, 10);
        rect(10, i * y - 10, 10, 10);
        rect(20, i * y - 20, 10, 10);
        rect(30, i * y - 30, 10, 10);
        rect(40, i * y - 40, 10, 10);
        rect(50, i * y - 50, 10, 10);
        rect(60, i * y - 60, 10, 10);
        rect(70, i * y - 70, 10, 10);
        rect(80, i * y - 80, 10, 10);
        rect(90, i * y - 90, 10, 10);
        rect(10, i * y - 10, 10, 10);
        rect(20, i * y - 20, 10, 10);
        rect(30, i * y - 30, 10, 10);
        rect(40, i * y - 40, 10, 10);
        rect(50, i * y - 50, 10, 10);
        rect(60, i * y - 60, 10, 10);
        rect(70, i * y - 70, 10, 10);
        rect(80, i * y - 80, 10, 10);
        rect(90, i * y - 90, 10, 10);
        rect(100, i * y - 100, 10, 10);
        rect(110, i * y - 110, 10, 10);
        rect(120, i * y - 120, 10, 10);
        rect(130, i * y - 130, 10, 10);
        rect(140, i * y - 140, 10, 10);
        rect(150, i * y - 150, 10, 10);
        rect(160, i * y - 160, 10, 10);
        rect(170, i * y - 170, 10, 10);
        rect(180, i * y - 180, 10, 10);
        rect(190, i * y - 190, 10, 10);
        rect(200, i * y - 200, 10, 10);
        rect(210, i * y - 210, 10, 10);
        rect(220, i * y - 220, 10, 10);
        rect(230, i * y - 230, 10, 10);
        rect(240, i * y - 240, 10, 10);
        rect(250, i * y - 250, 10, 10);
        rect(260, i * y - 260, 10, 10);
        rect(270, i * y - 270, 10, 10);
        rect(280, i * y - 280, 10, 10);
        rect(290, i * y - 290, 10, 10);
        rect(300, i * y - 300, 10, 10);
        rect(310, i * y - 310, 10, 10);
        rect(320, i * y - 320, 10, 10);
        rect(330, i * y - 330, 10, 10);
        rect(340, i * y - 340, 10, 10);
        rect(350, i * y - 350, 10, 10);
        rect(360, i * y - 360, 10, 10);
        rect(370, i * y - 370, 10, 10);
        rect(380, i * y - 380, 10, 10);
        rect(390, i * y - 390, 10, 10);
        rect(400, i * y - 400, 10, 10);
        rect(410, i * y - 410, 10, 10);
        rect(420, i * y - 420, 10, 10);
    }

    pop();
  
    push(); //cuadrado naranja arriba
    rotate(QUARTER_PI - 0.7);
    fill(mncolor, 140, 25, 200);
    rect(90, 12, 140, 120);
    pop();


    push();
    rotate(QUARTER_PI - 0.3); // cuadrado 1 violeta
    fill(77, 0, 77, 200);
    rect(70, 1, 130, 120);
    fill(77, 0, 77, 100);
    rect(70, 1, 130, 120);
    pop();

    push(); //cuadrado verde
    rotate(QUARTER_PI - 0.7);
    fill (0, 102, 102);  
    rect(100, 160, 160, 130);
    pop();

    push();
    rotate(QUARTER_PI - 0.4); //cuadrado 3 amarillo
    fill(255, 213, 0, 200);
    rect(85, 80, 100, 140);
    pop();


    push();
    rotate(QUARTER_PI - 0.2); //cuadrado azul oscuro
    fill(0, 51, 77, 100);
    rect(130, 20, 110, 130);
    pop();

    push(); //cuadrado morado
    rotate(QUARTER_PI - 0.7);
    fill(204, 0, 170, 100);
    rect(100, 160, 160, 130);
    pop();

    push();
    rotate(QUARTER_PI - 0.2); //cuadrado azul oscuro
    fill(0, 51, 77, 100);
    rect(130, 20, 110, 130);
    pop();

    push();
    rotate(TWO_PI - 0.4); //cuadrado azul oscuro DERECHA ARRIBA
    fill(0, 51, 153, 230);
    rect(90, 110, 120, 150);
    pop();


    push();
    rotate(QUARTER_PI - 0.6); //cuadrado fucsia arriba
    fill(255, 0, 170, 200);
    rect(260, -18, 110, 110);
    pop();

    push();
    rotate(TWO_PI - 0.4); //cuadrado azul oscuro DERECHA
    fill(0, 51, 153, 200);
    rect(180, 170, 140, 150);
    pop();

    push();
    rotate(TWO_PI - 0.4); //cuadrado azul oscuro DERECHA
    fill(0, 51, 153, 60);
    rect(180, 170, 140, 150);
    pop();


    push(); //cuadrado naranja
    rotate(TWO_PI - 0.6);
    fill(mncolor, 140, 25, 200);
    rect(70, 290, 150, 140);
    pop();


    push();
    rotate(TWO_PI - 0.2); //cuadrado fucsia
    fill(sccolor, 0, 170);
    rect(130, 180, 140, 140);
    pop();

    push(); //cuadrado naranja
    rotate(TWO_PI - 0.6);
    fill(mncolor, 140, 25, 100);
    rect(70, 290, 150, 140);
    pop();

    push();
    rotate(TWO_PI - 0.4); //cuadrado azul oscuro DERECHA ARRIBA
    fill(0, 51, 153, 100);
    rect(90, 110, 120, 150);
    pop();

    push();
    rotate(QUARTER_PI - 0.6); //cuadrado fucsia arriba
    fill(sccolor, 0, 170, 200);
    rect(260, -18, 110, 110);
    pop();

    push(); //cuadrado naranja arriba
    rotate(QUARTER_PI - 0.7);
    fill(mncolor, 140, 25, 100);
    rect(90, 12, 140, 120);
    pop();

    push();
    fill(sccolor, 0, 170, 200);
    rotate(QUARTER_PI - 0.2); //cuadrado azul 
    rect(130, 20, 110, 130);
    pop();

    push();
    rotate(QUARTER_PI - 1.2); //cuadrado fucsia arriba
    fill(sccolor, 0, 170, 200);
    rect(259, -15, 113, 112);
    pop();


}