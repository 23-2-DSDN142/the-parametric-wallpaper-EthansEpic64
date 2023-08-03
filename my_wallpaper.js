//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let bg_mode = 2;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(40 ,40, rect_width, rect_height);

  let Brown = color (232, 219, 153);

  if (bg_mode == 1){
    bgStripes()
  }
  
  if (bg_mode == 2){
    bgCrosses()
  }

  if (bg_mode == 3){
    bgSquares()
  }

  fill(Brown);
  rect(55, 120, 130, 30, 20); // dog body
  
  fill(Brown);
  ellipse(50, 120, 40, 35); //head

  fill(0,0,0); //black
  stroke(0);
  ellipse(43, 115, 2, 2); //eyes
  ellipse(53, 115, 2, 2);

  line(43,120, 53, 120) // mouth

  fill(130, 124, 91); 
  beginShape(); //left ear
  vertex(40, 104);
  vertex(34, 120);
  vertex(25, 117);
  vertex(38, 103);
  vertex(40, 104);
  endShape();

  fill(130, 124, 91); 
  beginShape(); //right ear
  vertex(60, 104);
  vertex(65, 120);
  vertex(74, 117);
  vertex(62, 104);
  vertex(60, 104);
  endShape();

  fill(Brown); //tail
  bezier(150,100,175,122,160,100,100,100);
  bezier(145,100,170,121,160,100,100,100);


  fill(Brown);
  noStroke();
  dogLeg(70,150); //left front leg

  fill(Brown);
  dogLeg(80,150); //right front leg

  fill(Brown);
  dogLeg(150,150); //left back leg
  
  fill(Brown);
  dogLeg(160,150); //right back leg
}

function dogLeg(legx,legy){
  beginShape(); //Leg
  vertex(legx, legy);
  vertex(legx-2, legy+20);
  vertex(legx-5, legy+21);
  vertex(legx-5, legy+23);
  vertex(legx+2, legy+23);
  vertex(legx+4, legy);
  endShape();
}

function bgStripes(){
  let blue = color (254, 191, 255);
  let purple = color (192, 70, 194);

  fill(purple); 
  noStroke();
  beginShape();
  vertex(0,50)
  vertex(50,0)
  vertex(0,0)
  endShape();

  fill(blue); 
  noStroke();
  beginShape();
  vertex(0,50);
  vertex(0,100);
  vertex(100,0);
  vertex(50,0);
  endShape();

  fill(purple); 
  noStroke();
  beginShape();
  vertex(0,100);
  vertex(0,150);
  vertex(150,0);
  vertex(100,0);
  endShape();

  fill(blue);
  noStroke();
  beginShape();
  vertex(0,150);
  vertex(0,200);
  vertex(200,0);
  vertex(150,0);
  endShape();

  fill(purple); 
  noStroke();
  beginShape();
  vertex(0,200);
  vertex(200,0);
  vertex(200,50);
  vertex(50,200);
  endShape();

  fill(blue); 
  noStroke();
  beginShape();
  vertex(200,50);
  vertex(50,200);
  vertex(100,200);
  vertex(200,100);
  endShape();

  fill(purple);
  noStroke();
  beginShape();
  vertex(200,100);
  vertex(100,200);
  vertex(150,200);
  vertex(200,150);
  endShape();

  fill(blue);
  noStroke();
  beginShape();
  vertex(200,150);
  vertex(150,200);
  vertex(200,200);
  vertex(200,200);
  endShape();
}

function bgCrosses(){
  let blue = color (254, 191, 255);
  let purple = color (192, 70, 194);

  fill(purple);
  noStroke();
  beginShape();
  vertex(50,0);
  vertex(150,0);
  vertex(100,50);
  vertex(50,0);
  endShape();

  fill(blue);
  noStroke();
  beginShape();
  vertex(0,0);
  vertex(50,0);
  vertex(100,50);
  vertex(150,0);
  vertex(200,0);
  vertex(100,100);
  vertex(0,50);
  endShape();

  fill(purple);
  noStroke();
  beginShape();
  vertex(0,0);
  vertex(0,50);
  vertex(100,150);
  vertex(200,50);
  vertex(200,0);
  vertex(100,100);
  vertex(0,0);
  endShape();

  fill(blue); 
  noStroke();
  beginShape();
  vertex(200,100);
  vertex(200,50);
  vertex(100,150);
  vertex(0,50);
  vertex(0,100);
  vertex(100,200);
  endShape();

  fill(purple);
  noStroke();
  beginShape();
  vertex(200,100);
  vertex(100,200);
  vertex(150,200);
  vertex(200,150);
  endShape();

  fill(purple);
  noStroke();
  beginShape();
  vertex(0,100);
  vertex(100,200);
  vertex(50,200);
  vertex(0,150);
  endShape();

  fill(blue); //bottom right triangle
  noStroke();
  beginShape();
  vertex(200,150);
  vertex(150,200);
  vertex(200,200);
  vertex(200,200);
  endShape();

  fill(blue); //bottom left triangle
  noStroke();
  beginShape();
  vertex(0,150);
  vertex(0,200);
  vertex(50,200);
  vertex(0,150);
  endShape();

}

function bgSquares(){
  let blue = color (254, 191, 255);
  let purple = color (192, 70, 194);

  fill(blue);
  noStroke();
  beginShape();
  vertex(50,0);
  vertex(150,0);
  vertex(100,50);
  vertex(50,0);
  endShape();

  fill(purple);
  noStroke();
  beginShape();
  vertex(0,0);
  vertex(50,0);
  vertex(100,50);
  vertex(150,0);
  vertex(200,0);
  vertex(100,100);
  vertex(0,50);
  endShape();

  fill(blue);
  noStroke();
  beginShape();
  vertex(0,0);
  vertex(0,50);
  vertex(100,150);
  vertex(200,50);
  vertex(200,0);
  vertex(100,100);
  vertex(0,0);
  endShape();

  fill(blue); 
  noStroke();
  beginShape();
  vertex(200,100);
  vertex(200,50);
  vertex(100,150);
  vertex(0,50);
  vertex(0,100);
  vertex(100,200);
  endShape();

  fill(purple);
  noStroke();
  beginShape();
  vertex(200,100);
  vertex(100,200);
  vertex(150,200);
  vertex(200,150);
  endShape();

  fill(purple);
  noStroke();
  beginShape();
  vertex(0,100);
  vertex(100,200);
  vertex(50,200);
  vertex(0,150);
  endShape();

  fill(blue); //bottom right triangle
  noStroke();
  beginShape();
  vertex(200,150);
  vertex(150,200);
  vertex(200,200);
  vertex(200,200);
  endShape();

  fill(blue); //bottom left triangle
  noStroke();
  beginShape();
  vertex(0,150);
  vertex(0,200);
  vertex(50,200);
  vertex(0,150);
  endShape();

}

