//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let bg_mode = 1; //this changes the pattern of the background stripes (1, 2 or 3)
let dog_amount = 4; //this changes amount of Bert's on screen (1,2, 3 or 4 (4 makes Bert long)
let dogSize = 100 //this changes the scale of Bert, cant figure out how to make everthing smaller, bigger works tho to a certain degree
let dogLength = 100; //this changes the length of Bert


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
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
    drawDog(100,80,dogLength,dogSize);
    dogBowl(130,30);
    dogBone(50,50);
  }

  if (dog_amount == 2){
    drawDog(110,22,dogLength,dogSize);
    drawDog(85,125,dogLength,dogSize);
    dogBowl(3,92);
    dogBowl(100,92);
    dogBone(57,102);
    dogBone(160,102);
    dogBone(10,6);
    dogBowl(58,-4);
    dogBone(110,6);
    dogBowl(154,-4)
  }

  if (dog_amount == 3){
    drawDog(70,60,dogLength,dogSize);
    drawDog(32,120,dogLength,dogSize);
    drawDog(110,5,dogLength,dogSize);
    dogBone(160,95);
    dogBowl(127,150);
    dogBone(8,30);
  }

  if (dog_amount == 4){
    drawDog(10,70,137,dogSize);
  }

}

function dogBone(boneX,boneY){
  let White = color (232, 217, 193);
  fill(White);
  stroke(0);
  strokeWeight(1);
  beginShape();
  ellipse(boneX+0.5,boneY+1.5,6,6);
  ellipse(boneX+3,boneY-3,6,6);
  ellipse(boneX+25,boneY+12,6,6);
  ellipse(boneX+28,boneY+8,6,6);
  vertex(boneX+3,boneY+2);
  vertex(boneX+22,boneY+11);
  vertex(boneX+26,boneY+7);
  vertex(boneX+6,boneY-2);
  vertex(boneX+3,boneY+2);
  endShape();
}

function dogBowl(bowlX,bowlY){
  let Red = color (209, 39, 27);
  fill(Red);
  stroke(0);
  strokeWeight(1);
  beginShape();
  vertex(bowlX+5,bowlY+5);
  vertex(bowlX+42,bowlY+20);
  vertex(bowlX+44,bowlY+32);
  vertex(bowlX-4,bowlY+12);
  vertex(bowlX+5,bowlY+5);
  endShape();
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
  bezier(dogX+dogLength-25, dogY+22, dogX+dogLength-24, dogY+17, dogX+dogLength-24, dogY+10, dogX+dogLength-34, dogY+4);
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

