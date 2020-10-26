class Cig {
  constructor(x, y, length) {
    this.x = x;
    this.y = y;
    this.length = length;
    this.timer = 0;
    this.smokes = [];
  }
  display() {
    push()
    scale(1.4)
    push();
    translate(this.x,this.y);
    for (let i = 0; i < random(5); i++) {
      let temp = new Smoke(5+(this.length-100), 0);
      temp.init();
      smoke.push(temp);
    }
    for (let i = 0; i < smoke.length; i++) {
      smoke[i].update();
      smoke[i].display();
      if (smoke[i].isdone()) {
        smoke.splice(i, 1);
      }
    }
    stroke(0)
    fill(250)
    rect(-100,-6,this.length,12);
    fill(170,120,0);
    noStroke();
    rect(-100,-6,20,12)
    fill(0);
    rect(this.length-100,-6,5,12)
    for (let i = 0; i < 5 ; i ++){
      stroke(100,50,0,40)
      fill(map(noise(random(5),random(5)), 0,1,100,255), random(70,100) ,0)
      circle(this.length - 100 + 5,2.5*i-5,3)
    }
    pop();
    pop();
  }
  randomize(){
    this.length = random(30,100)
  }
}