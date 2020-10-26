class Eye{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.state = 0;
    this.ix = 20 
    this.iy = 30 
    this.timer = 0;
  }
  iris(){
    fill("#964b00");
    circle(0,0,60);
    fill(0);
    if (this.state == 0){
      circle(0,0,20);
    }
    else if (this.state == 1){
      circle(0,0,10);
    }
    noStroke();
    fill(255);
    circle(5,5,6);
  }
  
  blink(){
    push();
    translate(this.x,this.y);
    line(-150,0,150,0);
    pop();
  }
  display(){
    let i = 0;
    if (!mouseIsPressed){
      this.state = 0;
      i = random(2);
      push();
      translate(this.x,this.y);
      fill(250);
      beginShape();
      vertex(-150,0);
      bezierVertex(-10,110+i,10,110+i,150,0);
      vertex(150,0);
      bezierVertex(10,-110-i,-10,-110-i,-150,0);
      vertex(-150,0);
      endShape();
      pop();
      push();
      translate(this.x+random(1)+map(mouseX,0,width,-20,20),this.y+random(1)+map(mouseY,0,height,-20,20));
      this.iris();
      pop();
    }
    if (mouseIsPressed){
      this.state = 1;
      this.timer++
      if (this.timer%60 == 0){
	    this.blink();
        this.ix = random(10,40) * (pow(-1,int(random(4))));
        this.iy = random(10,40) * (pow(-1,int(random(4))));
      }
      i = random(10);
      push();
      translate(this.x,this.y);
      fill(random(220,255));
      beginShape();
      vertex(-150,0);
      bezierVertex(-10,125+i,10,125+i,150,0);
      vertex(150,0);
      bezierVertex(10,-125-i,-10,-125-i,-150,0);
      vertex(-150,0);
      endShape();
      pop();
      push();
      translate(this.x+this.ix+i,this.y+this.iy+i);
      this.iris();
      pop();
      push();
      translate(this.x-this.ix+i,this.y-this.iy+i);
      noFill();
      strokeWeight(random(3))
      stroke(255,0,0,80);
      circle(random(3),random(3),60);
      stroke(0,0,255,80)
      strokeWeight(random(3))
      circle(random(-3),random(-3),60);
      pop();
      push();
      
      strokeWeight(random(3))
      translate(this.x+random(9),this.y+random(9));
      stroke(255,0,0,120);
      beginShape();
      vertex(-150,0);
      bezierVertex(-10,125+i,10,125+i,150,0);
      vertex(150,0);
      bezierVertex(10,-125-i,-10,-125-i,-150,0);
      vertex(-150,0);
      endShape();
      pop();
      
      push();
      strokeWeight(random(3))
      translate(this.x+random(-9),this.y+random(-9));
      stroke(0,0,255,120);
      beginShape();
      vertex(-150,0);
      bezierVertex(-10,125+i,10,125+i,150,0);
      vertex(150,0);
      bezierVertex(10,-125-i,-10,-125-i,-150,0);
      vertex(-150,0);
      endShape();
      pop();
    }
    else{
    this.timer = 0;
    }
  }
}
