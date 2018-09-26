var sala;
var door;
var rata;
var mismoscos = [];
var misarañas = [];
var mismariquitas = [];
var misratas = [];
var misAbejas = [];
var misovnis = [];

var x = [];
var y = [];

function preload() {

    sala = loadImage('assets/sala.jpg');
    door = loadImage('assets/door.png');


}

function setup() {
    createCanvas(1200, 1200);
    background(220);


    maya = new mosco(100, 200);

    for (var i = 0; i < 400; i = i + 1) {
        x[i] = random(0, width);
        y[i] = random(0, width);
    }

    chango = new araña(600, 200);

    for (var i = 0; i < 400; i = i + 1) {
        x[i] = random(0, width);
        y[i] = random(0, height);
    }

    rat = new rata(1200, 1050);

}

function draw() {

    image(sala, 0, 0, width, height);

    push();
    tint(255, 191, 128);
    image(door, -2, 763, 130, 100);
    pop();


    if (frameCount % 50 == 0) {
        mismoscos[mismoscos.length] = new mosco(random(0, width), random(0, height));
    }

    for (var i = 0; i < mismoscos.length; i = i + 1) {
        mismoscos[i].dibujarse();
        mismoscos[i].moverse();
        if (mismoscos[i].edad > 200) {
            mismoscos[i].morirse();
        }
    }

    if (frameCount % 50 == 0) {
        misovnis[misovnis.length] = new ovni(random(0, width), random(0, height));
    }




    maya.dibujarse();
    maya.moverse();

    rat.dibujarse();
    rat.moverse();


    chango.dibujarse();
    chango.moverse();

    for (var e = 0; e < misovnis.length; e = e + 1) {
        misovnis[e].dibujarse();
        misovnis[e].moverse();

        for (var j = 0; j < mismariquitas.length; j = j + 1) {

            if (dist(misovnis[e].x, misovnis[e].y, mismariquitas[j].x, mismariquitas[j].y) < 10) {
                mismariquitas[j].morirse();
            }
        }
    }

    for (var r = 0; r < mismariquitas.length; r = r + 1) {
        mismariquitas[r].dibujarse();
        mismariquitas[r].moverse();
        if (mismariquitas[r].edad > 200) {
            mismariquitas[r].morirse();
        }
    }

    for (var i = 0; i < mismoscos.length; i = i + 1) {
        mismoscos[i].dibujarse();
        mismoscos[i].moverse();
        if (mismoscos[i].edad > 200) {
            mismoscos[i].morirse();
        }

        for (var a = 0; a < mismariquitas.length; a = a + 1) {

            if (dist(mismoscos[i].x, mismoscos[i].y, mismariquitas[a].x, mismariquitas[a].y) < 10) {
                mismariquitas[a].morirse();
            }
        }
    }


}

function mouseReleased() {
    mismariquitas[mismariquitas.length] = new mariquita(mouseX, mouseY);

}

function mariquita(miX, miY) {
    //caracterìsticas
    this.x = miX;
    this.y = miY;
    this.tam = 20;
    this.edad = 0;
    this.estaViva = true;

    //habilidades
    this.dibujarse = function() {
        if (this.estaViva == true) {

            noFill();
            ellipse(this.x - 3, this.y - 9, 6, 6);
            ellipse(this.x + 3, this.y - 9, 6, 6);
            fill(0);
            ellipse(this.x, this.y, 18, 18);
            fill(255, 0, 0);
            ellipse(this.x, this.y + 10, 30, 30);
            fill(0);
            ellipse(this.x - 7, this.y + 2, 4, 4);
            ellipse(this.x + 7, this.y + 2, 4, 4);
            ellipse(this.x, this.y + 4, 4, 4);
            ellipse(this.x + 5, this.y + 12, 4, 4);
            ellipse(this.x - 5, this.y + 12, 4, 4);
            ellipse(this.x, this.y + 18, 4, 4);
        }
    };

    this.moverse = function() {
        this.x = this.x + random(-1, 1);
        this.y = this.y + random(-1, 1);

        this.edad = this.edad + 1;
    };

    this.morirse = function() {
        this.estaViva = false;

    }

}

function mosco(miX, miY) {
    //caracterìsticas
    this.x = miX;
    this.y = miY;
    this.tam = 20;
    this.edad = 0;
    this.estaViva = true;

    //habilidades
    this.dibujarse = function() {
        if (this.estaViva == true) {

            //fill(0);
            ellipse(this.x, this.y - 15, 30, 17);
            ellipse(this.x - 8, this.y - 12, 30, 12);
            ellipse(this.x - 8, this.y - 22, 30, 12);

        }
    };

    this.moverse = function() {
        this.x = this.x + 1;
        this.y = this.y + random(-1, 1);

        this.edad = this.edad + 1;


    };

    this.morirse = function() {
        this.estaViva = false;

    };

}

function araña(miX, miY) {
    //caracterìsticas
    this.x = miX;
    this.y = miY;
    this.tam = 20;
    this.edad = 0;
    this.estaViva = true;

    //habilidades
    this.dibujarse = function() {
        if (this.estaViva == true) {


            ellipse(this.x - 3, this.y - 9, 6, 6);
            ellipse(this.x + 3, this.y - 9, 6, 6);
            fill(0);
            ellipse(this.x, this.y, 18, 18);
            ellipse(this.x, this.y + 15, 30, 30);
            line(this.x + 5, this.y + 5, this.x + 25, this.y - 2);
            line(this.x + 5, this.y + 10, this.x + 30, this.y + 11);
            line(this.x + 5, this.y + 20, this.x + 30, this.y + 25);
            line(this.x + 5, this.y + 5, this.x - 25, this.y - 2);
            line(this.x + 5, this.y + 10, this.x - 30, this.y + 11);

            line(this.x + 5, this.y + 20, this.x - 30, this.y + 25);
            line(this.x, 0, this.x, this.y);


        }
    };

    this.moverse = function() {
        this.x = this.x;
        this.y = this.y + 1;

        if (this.y > 620) {
            this.y = 0;
        }

        this.edad = this.edad + 1;


    };

    this.morirse = function() {
        this.estaViva = false;

    };

}


function rata(miX, miY) {
    //caracterìsticas
    this.x = miX;
    this.y = miY;
    this.tam = 20;
    this.edad = 0;
    this.estaViva = true;

    //habilidades
    this.dibujarse = function() {
        if (this.estaViva == true) {

            fill(0);
            arc(this.x, this.y, 60, 70, PI, TWO_PI);
            arc(this.x - 33, this.y, 30, 40, PI, TWO_PI);
            ellipse(this.x - 32, this.y - 23, 10, 10);
            push();
            strokeWeight(3);
            line(this.x + 59, this.y - 2, this.x, this.y - 2);
            pop();

        }
    };

    this.moverse = function() {
        this.x = this.x - 1;
        this.y = this.y;

        if (this.x < 0) {
            this.x = 1200;
        }

    };
}

function ovni(miX, miY) {
    //caracterìsticas
    this.x = miX;
    this.y = miY;
    this.tam = 20;
    this.edad = 0;
    this.estaViva = true;

    //habilidades
    this.dibujarse = function() {
        if (this.estaViva == true) {

            push();
            fill(51, 102, 0);
            ellipse(this.x, 100 - 12, 30, 30); // Botón 5 - Ovni 
            ellipse(this.x, 100, 75, 30);
            pop();
        }
    };

    this.moverse = function() {
        this.x = this.x - 1;
        this.y = this.y;

        if (this.y > 880) {
            this.y = 0;
        }

        this.edad = this.edad + 2;

    };

    this.morirse = function() {
        this.estaViva = false;


    };

}