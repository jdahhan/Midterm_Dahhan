class Smoke{
  constructor(x, y){
    this.counter = 1;
    this.size = 10;
    this.x = x;
    this.y = y;
    this.alpha = 50;
    this.xstart = 0;
    this.yvel = 0;
  }
  
  init(){
    this.xstart = random(5*PI);
    this.yvel = -1 * random(0.75,1.1);
  }
  
  update(){
    this.counter ++;
    this.x += random(-0.5,0.5) + random(0.1,1.5)*sin((this.y+this.xstart)/10);
    this.y += random(0.7,1)*this.yvel;
    this.alpha /= 1.0001**this.counter;
    if (this.counter > 90){
      this.size -= 0.1
    }
  }
  
  isdone(){return this.alpha < 2;}
  
  display(){
    push()
    translate(this.x, this.y);
    noStroke()
    fill(150,this.alpha);
    circle(0,0,this.size);
    pop()
  }
}