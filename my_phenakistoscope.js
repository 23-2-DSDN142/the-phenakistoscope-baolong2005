const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  //pScope.output_mode(STATIC_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 0);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(circles);
  layer1.mode( SWIRL(8) );
  layer1.set_boundary( 300, 1200 );

  var layer2 = new PLayer(center);
  layer2.mode(RING);
  layer2.set_boundary( 0, 300);
}

function circles(x, y, animation, pScope){
  
  scale(animation.frame*5);
  blendMode(DIFFERENCE);
  fill(255, 230, 0); //yellow
  ellipse(0,0,120,120);
  scale(animation.frame*3);
  fill(8, 0, 255); //blue
  ellipse(0,0,120,120);
  scale(animation.frame*1);
  fill(255, 0, 0); //red
  ellipse(0,0,120,120);
  
  
}   
function center(x, y, animation, pScope){
  blendMode(DIFFERENCE);
  rotate(animation.wave(3)*5)
  translate(5+animation.wave(1),5 + animation.wave(1));
  fill(255, 230, 0); //yellow
  rect(0,0,100,100);
  translate(5+animation.wave(1),5 + animation.wave(1));
  fill(8, 0, 255); //blue
  rect(0,0,150,150);
  translate(5+animation.wave(2),5 + animation.wave(2));
  fill(255, 0, 0); //red
  rect(0,0,200,200);
}





