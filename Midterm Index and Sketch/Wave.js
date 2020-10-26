class Wave{
  constructor(x,y, aggression){
    x = x % width;
    this.x = x;
    this.y = y;
    this.aggression = aggression;
    
  }
  display(){
    beginShape();
    for (let x = -width/2; x < width/2 ; x ++){
      let xval = x  + width/2
      let yval = (map(((x)**2), 0, (width/2)**2, 60,1 ) * noise(0.2*(x+this.x), 0.2*(this.y)))**this.aggression
      vertex(xval, this.y + yval)
    }
    endShape();
  }
}
