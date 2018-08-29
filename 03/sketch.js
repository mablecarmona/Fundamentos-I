var violetax = 1770; //tallo 1
var violetay = 1100;
var violetatam = 20;
var violetavel = -26.08;
var rtallo = 153;
var gtallo = 153;
var btallo = 0;

var tallox = 1780; //tallo 2
var talloy = 1100;
var tallotam = 20;
var tallovel = -26.03;

var tallo3x = 1760; //tallo 3
var tallo3y = 1100;
var tallo3tam = 20;
var tallo3vel = -26.04;

var botonx = 1776; //botón 1
var botony = 1190;
var botontam = 20;
var botonvel = -26.08;

var botonx2 = 1785; //botón 2
var botony2 = 1190;
var botontam2 = 20;
var boton2vel = -26.03;

var botonx3 = 1760; //botón 3
var botony3 = 1190;
var botontam3 = 20;
var boton3vel = -26.04;

var botonx4 = 1785; // botón 4
var botony4 = 1190;
var botontam4 = 20;
var boton4vel = -26.03;

var botonx5 = 1785; // botón 5
var botony5 = 1190;
var botontam5 = 20;
var boton5vel = -26.03;

var botonx6 = 1780; // botón 6
var botony6 = 500;
var botontam6 = 5;
var boton6vel = -14;

var moscox = 400;
var moscoy = 480;
var moscotam = 40;
var alastam = 30;
var alastam2 = 12;
var moscovel = 1.03;

function setup() {
    createCanvas(2550, 1650);
    background(220);

}

function draw() {

    push(); //mosco
    if (frameCount > 30) {
        background(220);
        noStroke();
        fill(0);
        ellipse(moscox, moscoy - 15, alastam, alastam2 + 5);
        ellipse(moscox - 8, moscoy - 10, alastam, alastam2);
        ellipse(moscox - 8, moscoy - 22, alastam, alastam2);
        moscox = moscox + moscotam * moscovel;
    }
    if (moscox > 1780) {
        moscox = moscox + 10;
        botontam6 = botontam6 * moscovel;
    }

    pop();
    strokeWeight(3);
    strokeCap(ROUND);
    fill(153, 153, 0);
    rect(violetax, violetay, 7, violetatam); //tallo 1
    violetatam = violetatam + violetavel;
    if (violetatam < -600) {
        violetatam = -600;
    }

    push();
    rect(tallox, talloy, 7, tallotam); //tallo 2
    tallotam = tallotam + tallovel;
    if (tallotam < -600) {
        tallotam = -600;
    }
    pop();


    push();
    rect(tallo3x, tallo3y, 7, tallo3tam); // tallo 3
    tallo3tam = tallo3tam + tallo3vel;
    if (tallo3tam < -600) {
        tallo3tam = -600;
    }
    pop();


    push();
    fill(rtallo, gtallo, btallo);
    ellipse(botonx5, botony5, botontam5, botontam5); //boton 5
    botony5 = botony5 + boton5vel
    botontam5 = botontam5 + 0.01;
    if (botony5 < 580) {
        botony5 = 580;
        rtallo = rtallo + 0.05;
        gtallo = gtallo - 0.01;
        btallo = btallo + 0.7;
        botontam5 = botontam5 + 2;
    }

    if (botontam5 > 100) {
        botontam5 = 100;
    }
    pop();

    push();
    fill(rtallo, gtallo, btallo);
    ellipse(botonx4, botony4, botontam4, botontam4); //boton 4
    botony4 = botony4 + boton4vel;
    botontam4 = botontam4 + 0.01;
    if (botony4 < 650) {
        botony4 = 650;
        rtallo = rtallo + 0.05;
        gtallo = gtallo - 0.01;
        btallo = btallo + 0.7;
        botontam4 = botontam4 + 2;
    }

    if (botontam4 > 100) {
        botontam4 = 100;
    }
    pop();


    push();
    fill(rtallo, gtallo, btallo);
    ellipse(botonx3, botony3, botontam3, botontam3); //boton 3
    botony3 = botony3 + boton3vel;
    botontam3 = botontam3 + 0.01;
    if (botony3 < 685) {
        botony3 = 685;
        rtallo = rtallo + 0.05;
        gtallo = gtallo - 0.01;
        btallo = btallo + 0.7;
        botontam3 = botontam3 + 3;
    }

    if (botontam3 > 100) {
        botontam3 = 100;
    }
    pop();

    push();
    fill(rtallo, gtallo, btallo);
    ellipse(botonx2, botony2, botontam2, botontam2); //boton 2
    botony2 = botony2 + boton2vel;
    botontam2 = botontam2 + 0.01;
    if (botony2 < 750) {
        botony2 = 750;
        rtallo = rtallo + 0.05;
        gtallo = gtallo - 0.01;
        btallo = btallo + 0.7;
        botontam2 = botontam2 + 3;
    }

    if (botontam2 > 100) {
        botontam2 = 100;
    }
    pop();

    push();
    fill(rtallo, gtallo, btallo);
    ellipse(botonx, botony, botontam, botontam); //boton 1
    botony = botony + botonvel;
    botontam = botontam + 0.01;
    if (botony < 790) {
        botony = 790;
        rtallo = rtallo + 0.05;
        gtallo = gtallo - 0.01;
        btallo = btallo + 0.7;
        botontam = botontam + 1;
    }

    if (botontam > 60) {
        botontam = 60;
    }
    pop();

    push();
    strokeWeight(5);
    fill(255);
    rect(1500, 1080, 515, 70);
    beginShape();
    vertex(1550, 1150);
    vertex(1580, 1350);
    vertex(1950, 1350);
    vertex(1975, 1150);
    endShape(CLOSE);
    strokeWeight(6);
    line(1300, 1350, 2200, 1350)
    pop();

    if (frameCount > 30) {
        fill(rtallo, gtallo, btallo);
        ellipse(botonx6, botony6, botontam6, botontam6); //boton 6
        rtallo = rtallo + 100;
        gtallo = gtallo - 0.01;
        btallo = btallo + 0.7;
        botontam6 = botontam6 -1 ;
    }


    if (botontam6 < 30) {
        botontam6 = 30;
    }

    //if (frameCount < 81) {
    //saveCanvas("miFlipbooksito_" + frameCount, 'jpg');
    //}

}