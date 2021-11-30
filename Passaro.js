class Passaro extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.caminho = [];
    this.visibilidade = 255;
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();

    if(this.body.velocity.x > 8 && this.body.position.x >200 && estado !== "NOESTILINGUE"){
      var position = [this.body.position.x,this.body.position.y];
      this.caminho.push(position);
    }
  
    for (var i = 0;i < this.caminho.length;i++){
      push();
      tint(255,this.visibilidade)
      this.visibilidade -=0.5;
      image(this.smoke,this.caminho[i][0],this.caminho[i][1]);
      pop();
    }
  }
}
