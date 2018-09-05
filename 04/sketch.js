var herramienta = 1;
var colorcito = 1;

var posXbot1 = 20;
var porYbot1 = 30;
var tambot1 = 30;
var tambot2 = 60;

var posXbot2 = 140;
var posYbot2 = 45;
var tambot2 = 60;
var tambot2a = 50;
var tambot2b = 40;
var tambot2c = 30;
var tambot2d = 20;

var posXbot3 = 180;
var posYbot3 = 30;
var tambot3 = 60;
var tambot3b = 10;

var posXbot4 = 260;
var posYbot4 = 20;
var tambot4 = 30;
var tambot4b = 60;

var posXbot5 = 55;
var posYbot5 = 120;
var tambot5 = 75;
var tambot5a = 30;

var posXbot6 = 340;
var posYbot6 = 35;
var tambot6 = 60;
var tambot6a = 40;

var posXbot7 = 340;
var posYbot7 = 35;
var tambot7 = 40;
var tambot7a = 20;

var posXbot8 = 55;
var posYbot8 = 180;
var tambot8 = 60;
var tambot8a = 40;

var posXbot9 = 25;
var posYbot9 = 240;
var tambot9 = 60;

var posXbot9a = 55;
var posYbot9a = 280;
var tambot9a = 60;
var tambot9a = 40;

var posXbot10 = 420;
var posYbot10 = 20;
var tambot10 = 60;
var tambot10a = 90;

var posXbot11 = 55;
var posYbot11 = 400;
var tambot11 = 25;
var tambot11a = 150;
var tambot11b = 60;

var posXbot12 = 40;
var posYbot12 = 440;
var tambot12 = 30;


//colores
var posXbot13 = 530;
var posYbot13 = 25;
var tambot13 = 30;

var posXbot14 = 580;
var posYbot14 = 25;
var tambot14 = 30;

var posXbot15 = 630;
var posYbot15 = 25;
var tambot15 = 30;

var posXbot16 = 680;
var posYbot16 = 25;
var tambot16 = 30;

var posXbot17 = 730;
var posYbot17 = 25;
var tambot17 = 30;


var posXbot18 = 40;
var posYbot18 = 530;
var tambot18 = 30;

var posXbot19 = 40;
var posYbot19 = 580;
var tambot19 = 30;

var posXbot20 = 40;
var posYbot20 = 630;
var tambot20 = 30;

var posXbot21 = 40;
var posYbot21 = 680;
var tambot21 = 30;

var posXbot22 = 40;
var posYbot22 = 730;
var tambot22 = 30;


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(230, 255, 242);
}

function draw() {
    rect(posXbot1, porYbot1, tambot2, tambot1, 20); //Botón 1 - Borrador 
    ellipse(posXbot2, posYbot2, 40, 40); //Botón 2 - circulos
    ellipse(posXbot2, posYbot2, 20, 20);
    rect(posXbot3, posYbot3, tambot3, tambot3b); //Botón 3 - Escaleras
    rect(posXbot4, posYbot4, tambot4, tambot4b); //Botón 4 - Ondas
    line(265, 40, 265, 80);
    line(270, 20, 270, 80);
    line(275, 40, 275, 80);
    line(280, 20, 280, 80);
    line(285, 40, 285, 80);
    push();
    //fill(0, 51, 0);
    ellipse(posXbot5, posYbot5 - 12, tambot5a, tambot5a); // Botón 5 - Ovni 
    ellipse(posXbot5, posYbot5, tambot5, tambot5a);
    pop();

    arc(posXbot8, posYbot8, tambot8, tambot8, 0, PI + QUARTER_PI, PIE); // Galleta de la fortuna

    push();
    arc(posXbot6, posYbot6, tambot6, tambot6, 0, PI + QUARTER_PI, PIE); // Órbita
    ellipse(posXbot7, posYbot7, tambot7, tambot7);
    ellipse(posXbot7 + 20, posYbot7, tambot7a, tambot7a);
    pop();

    push();
    strokeWeight(6);
    rect(posXbot9, posYbot9, tambot9, tambot9); //Botón cuadrados
    rect(posXbot9 + 5, posYbot9 + 5, tambot9 - 10, tambot9 - 10, 10);
    rect(posXbot9 + 10, posYbot9 + 10, tambot9 - 20, tambot9 - 20);
    rect(posXbot9 + 15, posYbot9 + 15, tambot9 - 30, tambot9 - 30, 10);
    rect(posXbot9 + 20, posYbot9 + 20, tambot9 - 40, tambot9 - 40, 10);
    pop();


    arc(posXbot10, posYbot10, tambot10, tambot10a, 0, PI, PI, PIE); // Tetas
    arc(posXbot10 + 60, posYbot10, tambot10, tambot10a, 0, PI, PI, PIE);
    arc(posXbot10, posYbot10 + 40, tambot10 - 50, tambot10a - 70, 0, PI, PI, PIE);
    arc(posXbot10 + 60, posYbot10 + 40, tambot10 - 50, tambot10a - 70, 0, PI, PI, PIE);


    arc(posXbot11, posYbot11, tambot11, tambot11a, PI, TWO_PI); // Pistola
    arc(posXbot11 - 24, posYbot11, tambot11, tambot11b, PI, TWO_PI);
    arc(posXbot11 + 24, posYbot11, tambot11, tambot11b, PI, TWO_PI);
    arc(posXbot11, posYbot11 - 60, tambot11 - 40, tambot11b - 70, 0, PI, PI, PIE)



    line(39, 430, 79, 430);
    ellipse(40, 430, 10, 10);
    rect(posXbot12, posYbot12, tambot12, tambot12, 10);

    //Colores
    push();
    fill(0, 153, 153);
    rect(posXbot13, posYbot13, tambot13, tambot13);
    fill(153, 102, 255);
    rect(posXbot14, posYbot14, tambot14, tambot14);
    fill(255, 80, 80);
    rect(posXbot15, posYbot15, tambot15, tambot15);
    fill(255, 204, 204);
    rect(posXbot16, posYbot16, tambot16, tambot16);
    fill(255, 255, 255);
    rect(posXbot17, posYbot17, tambot17, tambot17);
    fill(51, 153, 255);
    rect(posXbot18, posYbot18, tambot18, tambot18);
    fill(255, 255, 153);
    rect(posXbot19, posYbot19, tambot19, tambot19);
    fill(204, 255, 204);
    rect(posXbot20, posYbot20, tambot20, tambot20);
    fill(255, 102, 0);
    rect(posXbot21, posYbot21, tambot21, tambot21);
    fill(194, 214, 214);
    rect(posXbot22, posYbot22, tambot22, tambot22);
    pop();



    if (mouseIsPressed == true) {

        if (herramienta == 1) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }

        if (herramienta == 2) {
            ellipse(mouseX, mouseY, tambot2, tambot2);
            ellipse(mouseX, mouseY, tambot2a, tambot2a);
            ellipse(mouseX, mouseY, tambot2b, tambot2b);
            ellipse(mouseX, mouseY, tambot2c, tambot2c);
            ellipse(mouseX, mouseY, tambot2d, tambot2d);
        }

        if (herramienta == 3) {
            rect(mouseX, mouseY, pmouseX, tambot3b);
        }

        push();
        if (herramienta == 4) {
            strokeWeight(2);
            line(mouseX, mouseY, mouseX, width / 2);
            //ellipse(width/2, height/2, mouseX +width/2, mouseY +height/2);
            pop();
        }

        push();
        if (herramienta == 5) {
            //line(mouseX, mouseY, mouseX, width / 2);
            //fill(0, 51, 0);
            ellipse(pmouseX, mouseY - 12, tambot5a, tambot5a); // Botón 5 - Ovni 
            ellipse(pmouseX, mouseY, tambot5, tambot5a);
            pop();

        }

        if (herramienta == 6) {
            arc(mouseX, mouseY, tambot6, tambot6, 0, PI + QUARTER_PI, PIE);
        }

        if (herramienta == 7) {
            arc(mouseX, mouseY, tambot6, tambot6, 0, PI + QUARTER_PI, PIE); // órbita
            ellipse(mouseX, mouseY, tambot7, tambot7);
            ellipse(mouseX + 20, mouseY, tambot7a, tambot7a);
        }

        push();
        if (herramienta == 8) {
            strokeWeight(5);
            rect(mouseX, mouseY, tambot9, tambot9);
            rect(mouseX + 5, mouseY + 5, tambot9 - 10, tambot9 - 10);
            rect(mouseX + 10, mouseY + 10, tambot9 - 20, tambot9 - 20, 10);
            rect(mouseX + 15, mouseY + 15, tambot9 - 30, tambot9 - 30);
            //fill(255, 255, 0);
            rect(mouseX + 20, mouseY + 20, tambot9 - 40, tambot9 - 40, 10);
            //rect(mouseX + 30, mouseY + 30, tambot9 - 20, tambot9 - 20);
            //rect(mouseX + 50, mouseY + 50, tambot9 - 30, tambot9 - 30);
            pop();
        }

        if (herramienta == 9) {
            arc(mouseX, mouseY, tambot10, tambot10a, 0, PI, PI, PIE); // Tetas
            arc(mouseX + 60, mouseY, tambot10, tambot10a, 0, PI, PI, PIE);
            arc(mouseX, mouseY + 40, tambot10 - 50, tambot10a - 70, 0, PI, PI, PIE);
            arc(mouseX + 60, mouseY + 40, tambot10 - 50, tambot10a - 70, 0, PI, PI, PIE);
        }

        if (herramienta == 10) {

            arc(mouseX, mouseY, tambot11, tambot11a, PI, TWO_PI); // Pistola
            arc(mouseX - 24, mouseY, tambot11, tambot11b, PI, TWO_PI);
            arc(mouseX + 24, mouseY, tambot11, tambot11b, PI, TWO_PI);
            arc(mouseX, mouseY - 60, tambot11 - 40, tambot11b - 70, 0, PI, PI, PIE)
        }

        if (herramienta == 11) {
            line(width / 2, height / 2, mouseX, mouseY);
            ellipse(mouseX + 20, mouseY + 20, 10, 10);
        }

        if (colorcito == 1) {
            fill(0, 153, 153);
        }


        if (colorcito == 2) {
            fill(153, 102, 255);
        }


        if (colorcito == 3) {
            fill(255, 80, 80);
        }

        if (colorcito == 4) {
            fill(255, 204, 204);
        }

        if (colorcito == 5) {
            fill(255, 255, 255);
        }


        if (colorcito == 6) {
            fill(51, 153, 255);
        }

        if (colorcito == 7) {
            fill(255, 255, 153);
        }

        if (colorcito == 8) {
            fill(204, 255, 204);
        }

        if (colorcito == 9) {
            fill(255, 102, 0);
        }

        if (colorcito == 10) {
            fill(194, 214, 214);
        }


        if (mouseX > posXbot1 && mouseX < posXbot1 + tambot1 &&
            mouseY > porYbot1 && mouseY < porYbot1 + tambot1) {
            background(230, 255, 242);
        }


        if (mouseX > posXbot2 && mouseX < posXbot2 + tambot2 &&
            mouseY > posYbot2 && mouseY < posYbot2 + tambot2 &&
            mouseX > posXbot2 && mouseX < posXbot2 + tambot2a &&
            mouseY > posYbot2 && mouseY < posYbot2 + tambot2a &&
            mouseX > posXbot2 && mouseX < posXbot2 + tambot2b &&
            mouseY > posYbot2 && mouseY < posYbot2 + tambot2b &&
            mouseX > posXbot2 && mouseX < posXbot2 + tambot2c &&
            mouseY > posYbot2 && mouseY < posYbot2 + tambot2c &&
            mouseX > posXbot2 && mouseX < posXbot2 + tambot2d &&
            mouseY > posYbot2 && mouseY < posYbot2 + tambot2d) {
            herramienta = 2;
        }

        if (mouseX > posXbot3 && mouseX < posXbot3 + tambot3 &&
            mouseY > posYbot3 && mouseY < posYbot3 + tambot3) {
            herramienta = 3;

        }

        if (mouseX > posXbot4 && mouseX < posXbot4 + tambot4 &&
            mouseY > posYbot4 && mouseY < posYbot4 + tambot4) {
            herramienta = 4;

        }

        if (mouseX > posXbot5 && mouseX < posXbot5 + tambot5 &&
            mouseY > posYbot5 && mouseY < posYbot5 + tambot5 &&
            mouseX > posXbot5 && mouseX < posXbot5 + tambot5a &&
            mouseY > posYbot5 && mouseY < posYbot5 + tambot5a) {
            herramienta = 5;

        }

        if (mouseX > posXbot8 && mouseX < posXbot8 + tambot8 &&
            mouseY > posYbot8 && mouseY < posYbot8 + tambot8) {
            herramienta = 6;
        }


        if (mouseX > posXbot7 && mouseX < posXbot7 + tambot7 &&
            mouseY > posYbot7 && mouseY < posYbot7 + tambot7 &&
            mouseX > posXbot7 && mouseX < posXbot7 + tambot7a &&
            mouseY > posYbot7 && mouseY < posYbot7 + tambot7a) {
            herramienta = 7;
        }

        if (mouseX > posXbot9 && mouseX < posXbot9 + tambot9 &&
            mouseY > posYbot9 && mouseY < posYbot9 + tambot9) {
            herramienta = 8;
        }

        if (mouseX > posXbot10 && mouseX < posXbot10 + tambot10 &&
            mouseY > posYbot10 && mouseY < posYbot10 + tambot10) {
            herramienta = 9;
        }

        if (mouseX > posXbot11 && mouseX < posXbot11 + tambot11 &&
            mouseY > posYbot11 && mouseY < posYbot11 + tambot11 &&
            mouseX > posXbot11 && mouseX < posXbot11 + tambot11a &&
            mouseY > posYbot11 && mouseY < posYbot11 + tambot11a &&
            mouseX > posXbot11 && mouseX < posXbot11 + tambot11b &&
            mouseY > posYbot11 && mouseY < posYbot11 + tambot11b) {
            herramienta = 10;
        }

        if (mouseX > posXbot12 && mouseX < posXbot12 + tambot12 &&
            mouseY > posYbot12 && mouseY < posYbot12 + tambot12) {
            herramienta = 11;
        }


        if (mouseX > posXbot13 && mouseX < posXbot13 + tambot13 &&
            mouseY > posYbot13 && mouseY < posYbot13 + tambot13) {
            colorcito = 1;
        }

        if (mouseX > posXbot14 && mouseX < posXbot14 + tambot14 &&
            mouseY > posYbot14 && mouseY < posYbot14 + tambot14) {
            colorcito = 2;
        }

        if (mouseX > posXbot15 && mouseX < posXbot15 + tambot15 &&
            mouseY > posYbot15 && mouseY < posYbot15 + tambot15) {
            colorcito = 3;
        }

        if (mouseX > posXbot16 && mouseX < posXbot16 + tambot16 &&
            mouseY > posYbot16 && mouseY < posYbot16 + tambot16) {
            colorcito = 4;
        }

        if (mouseX > posXbot17 && mouseX < posXbot17 + tambot17 &&
            mouseY > posYbot17 && mouseY < posYbot17 + tambot17) {
            colorcito = 5;
        }

        if (mouseX > posXbot18 && mouseX < posXbot18 + tambot18 &&
            mouseY > posYbot18 && mouseY < posYbot18 + tambot18) {
            colorcito = 6;
        }

        if (mouseX > posXbot19 && mouseX < posXbot19 + tambot19 &&
            mouseY > posYbot19 && mouseY < posYbot19 + tambot19) {
            colorcito = 7;
        }

        if (mouseX > posXbot20 && mouseX < posXbot20 + tambot20 &&
            mouseY > posYbot20 && mouseY < posYbot20 + tambot20) {
            colorcito = 8;
        }

        if (mouseX > posXbot21 && mouseX < posXbot21 + tambot21 &&
            mouseY > posYbot21 && mouseY < posYbot21 + tambot21) {
            colorcito = 9;
        }

        if (mouseX > posXbot22 && mouseX < posXbot22 + tambot22 &&
            mouseY > posYbot22 && mouseY < posYbot22 + tambot22) {
            colorcito = 10;
        }
    }

}