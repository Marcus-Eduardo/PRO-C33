const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var caixa1, caixa2,caixa3, caixa4,caixa5,caixa6,caixa7,caixa8,caixa9,caixa10,caixa11;
var fundoImg, solo, platforma;
var bird, estilingue;
var estado = "NOESTILINGUE";
var bg,bgImg;
var Pontos = 0;
var porco1,porco2,porco3,porco4,porco5,porco6;
var tronco1,tronco2,tronco3,tronco4;

//tentativa de plataforma
var tronco5,tronco6,tronco7;

function preload() {
    fundoImg = loadImage("sprites/bg.png");

    pegarFundo();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    solo = new Solo(600,height,1200,20);
    platforma = new Solo(150, 305, 300, 170);

    
    //Caixas da ponta Esquerda
    caixa3 = new Caixa(700,240,70,70);
    caixa1 = new Caixa(700,320,70,70);
    caixa9 = new Caixa(705,100,70,70)
    //Caixas do Meio:
    caixa2 = new Caixa(920,320,70,70);
    caixa4 = new Caixa(920,240,70,70);
    caixa8 = new Caixa(929,100,70,70);
    //Caixas da ponta Direita :
    caixa5 = new Caixa(1100,380,70,70);
    caixa6 = new Caixa(1100,240,70,70);
    caixa7 = new Caixa(1100,100,70,70);

    porco1 = new Porco(810, 350);
    porco2 = new Porco(810,205);
    porco3 = new Porco(810,180);
    porco4 = new Porco(1005,205);
    porco5 = new Porco(500,200);
    pig3 = new Porco(1005, 380);
    porco6 = new Porco(1005,175);

    tronco1 = new Tronco(900,260,465, PI/2);
    tronco3 =  new Tronco(900,180,465, PI/2);
    tronco4 = new Tronco(760,120,150, PI/7);
    //log5 = new Tronco(870,120,150, -PI/7);
    
    //Plataforma
    tronco5 = new Tronco(500,370,150,-PI/1);
    tronco6 = new Tronco(495,200,250,-PI/2);
    tronco7 = new Tronco(495,370,150,-PI/1);
    caixa10 = new Caixa(400,190,70,70);
    caixa11 = new Caixa(600,190,70,70);

    bird = new Passaro(200,50);
    estilingue = new Estilingue(bird.body,{x:200, y:50});



}

function draw(){

    if(bgImg){
        background(bgImg);
    }else {
        background(fundoImg);
    }

    noStroke();
    
    textSize(30);
    fill("orange");
    text("Pontos: " + Pontos,width -185,50);

    
    Engine.update(engine);

    //strokeWeight(4);

    //Caixas da ponta Esquerda
    caixa1.display();
    caixa3.display(); 
    caixa9.display();
    //Caixas do Meio
    caixa4.display();
    caixa2.display();
    caixa8.display();
    //Caixas da ponta Direita
    caixa5.display();
    caixa6.display();
    caixa7.display();
    //outro
    caixa10.display();
    caixa11.display();

    solo.display();

    tronco1.display();
    //tronco4.display();
    //log5.display();
    tronco3.display();
    tronco5.display();
    tronco6.display();
    tronco7.display();

    pig3.display();
    porco1.display();
    porco2.display();
    porco3.display();
    porco4.display();
    porco5.display();
    porco6.display();
    
    bird.display();
   //console.log(bird.body.speed);
    platforma.display();
    //log6.display();
    estilingue.display();    

    porco1.pontos();
    porco2.pontos();               
    porco3.pontos();   
    porco4.pontos();           
    porco5.pontos();   
    porco6.pontos();                              
    pig3.pontos();

    
}

function mouseDragged(){
    if(estado === "NOESTILINGUE" && mouseX < 600){
        Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    estilingue.voar();
    estado = "LANCADO";
}
function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1 || keyCode === 32 && bird.body.position.y < 0 || keyCode === 32 && bird.body.position.y > height || keyCode === 32 && bird.body.position.x < 0 || keyCode === 32 && bird.body.position.x > width ){
        estilingue.ligar();
        estado = "NOESTILINGUE";
        bird.caminho = [];
        bird.visibilidade = 255;
    }
}
async function pegarFundo(){
    
    var resposta = await fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo");

    var respostaJSON = await resposta.json();

    var dateTime = respostaJSON.datetime;

    var hora = dateTime.slice(11,13);

    if(hora >= 6 && hora < 19){
        bg = "sprites/bg.png";
    }else {
        bg = "sprites/bg2.jpg";
    }
    bgImg = loadImage(bg);
} 