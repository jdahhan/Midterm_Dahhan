class Drop{
  constructor(){
    this.x = random(0, width);
    this.y = random(0,-height)
    this.speed = random(5,10);
  }
  display() {
    noStroke();
    fill(100,100,250,80);
    ellipse(this.x, this.y, random(1, 5), random(1, 5));   
  }
  update() {
    this.gravity = 1.05;
    this.y = this.y + this.speed*this.gravity;  
    
    if (this.y > height) {
      this.y = random(0, -height);
    }
  }
}