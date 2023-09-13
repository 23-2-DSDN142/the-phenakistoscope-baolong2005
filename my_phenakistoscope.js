const SLICE_COUNT = 10;

function setup_pScope(pScope){
  pScope.output_mode(OUTPUT_GIF(1000));
  //pScope.output_mode(STATIC_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 0);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(circles);
  layer1.mode( SWIRL(3) );
  layer1.set_boundary( 0, 1000 );

}

function circles(x, y, animation, pScope){
  
  scale(animation.frame*3);

  ellipse(0,0,50,50); // draw head
  fill(30);
  ellipse(-10,-10,10,10); //draw eye
  ellipse(10,-10,10,10); // draw eye
  arc(0,10,20,10,0,180); // draw mouth

}


