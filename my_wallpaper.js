//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let bg_mode = 2; //this changes the pattern of the background stripes (1, 2 or 3)
let dog_amount = 4;
let dogSize = 100;
let dogX = 100;
let dogY = 100;
let dogLength = 100;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
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

  if (bg_mode == 1){
    bgStripes()
  }
  
  if (bg_mode == 2){
    bgCrosses()
  }

  if (bg_mode == 3){
    bgSquares()
  }

  if (dog_amount == 1){
    drawDog(10,80,dogLength,dogSize);
  }

  if (dog_amount == 2){
    drawDog(110,10,dogLength,dogSize);
    drawDog(85,110,dogLength,dogSize);
  }

  if (dog_amount == 4){
    drawDog(10,20,180,dogSize);
    drawDog(110,120,100,dogSize)
  }
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

function drawDog(dogX,dogY,dogLength,scaler){
  let Brown = color (232, 219, 153);
  
  fill(Brown);
  noStroke();
  rect(dogX-45, dogY+20, dogLength*1.3, scaler*0.3, scaler*0.2); // dog body
  noStroke();
  fill(Brown);
  ellipse(dogX-50, dogY+20, scaler*0.4, scaler*0.35); //head

  fill(0,0,0); //black
  stroke(0);
  strokeWeight(scaler*0.01);
  ellipse(dogX-57, dogY+15, scaler*0.02, scaler*0.02); //eyes
  ellipse(dogX-47, dogY+15, scaler*0.02, scaler*0.02);

  strokeWeight(scaler*0.01);
  line(dogX-57,dogY+20, dogX-47, dogY+20) // mouth

  fill(130, 124, 91); 
  strokeWeight(scaler*0.01);
  beginShape(); //left ear
  vertex(dogX-60, dogY+4);
  vertex(dogX-66, dogY+20);
  vertex(dogX-75, dogY+17);
  vertex(dogX-62, dogY+3);
  vertex(dogX-60, dogY+4);
  endShape();

  fill(130, 124, 91); 
  strokeWeight(scaler*0.01);
  beginShape(); //right ear
  vertex(dogX-40, dogY+4);
  vertex(dogX-35, dogY+20);
  vertex(dogX-26, dogY+17);
  vertex(dogX-38, dogY+4);
  vertex(dogX-40, dogY+4);
  endShape();

  noFill(); //tail
  strokeWeight(scaler*0.06);
  stroke(Brown);
  beginShape();
  bezier(dogX+75, dogY+22, dogX+76, dogY+17, dogX+76, dogY+10, dogX+66, dogY+4);
  endShape(); 

  fill(Brown);
  noStroke();
  dogLeg(dogX-30,dogY+49); //left front leg

  fill(Brown);
  dogLeg(dogX-20,dogY+49); //right front leg

  fill(Brown);
  dogLeg(dogX+dogLength-40,dogY+49); //left back leg
  
  fill(Brown);
  dogLeg(dogX+dogLength-30,dogY+49); //right back leg
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

