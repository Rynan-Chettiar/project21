var bullet;
var wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed= Math.round(random(233, 321))
  weight= Math.round(random(30, 52))
  thickness= Math.round(random(22, 83))

  bullet= createSprite(50, 200, 50, 10)
  bullet.velocityX= speed;
  bullet.shapeColor="white";
  wall= createSprite(1000, 200, thickness, height/2)
  wall.shapeColor=(80, 80, 80)
}

function draw() {
  background(0);

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX= 0;
    var damage= (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

    if(damage>10)
    {
      wall.shapeColor="red";
    }
    
    if(damage<10)
    {
      wall.shapeColor="green";
    }
  
  }
  
  
  drawSprites();
}

function hasCollided(lbullet, lwall)
{

bulletRightEdge= lbullet.x+lbullet.width;
wallLeftEdge= lwall.x;

if (bulletRightEdge>= wallLeftEdge)
{

 return true;

}

return false;

}