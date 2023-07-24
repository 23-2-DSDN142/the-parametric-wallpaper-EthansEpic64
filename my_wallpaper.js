//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

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

  let Brown = color (82, 36, 34);
  
  fill(252,3,3); //red
  beginShape();
  vertex(0,50)
  vertex(50,0)
  vertex(0,0)
  endShape();

  fill(161, 3, 252); //purple
  beginShape();
  vertex(0,50);
  vertex(0,100);
  vertex(100,0);
  vertex(50,0);
  endShape();

  fill(3, 252, 24); //green
  beginShape();
  vertex(0,100);
  vertex(0,150);
  vertex(150,0);
  vertex(100,0);
  endShape();

  fill(3, 7, 252); //blue
  beginShape();
  vertex(0,150);
  vertex(0,200);
  vertex(200,0);
  vertex(150,0);
  endShape();

  fill(252, 227, 3); //yellow
  beginShape();
  vertex(0,200);
  vertex(200,0);
  vertex(200,50);
  vertex(50,200);
  endShape();

  fill(252, 3, 252); //pink
  beginShape();
  vertex(200,50);
  vertex(50,200);
  vertex(100,200);
  vertex(200,100);
  endShape();

  fill(252, 123, 3); //orange
  beginShape();
  vertex(200,100);
  vertex(100,200);
  vertex(150,200);
  vertex(200,150);
  endShape();

  fill(3, 252, 252); //lightblue
  beginShape();
  vertex(200,150);
  vertex(150,200);
  vertex(200,200);
  vertex(200,200);
  endShape();

  fill(Brown);
  rect(55, 120, 130, 30, 20); // dog body
  
  fill(Brown);
  ellipse(50, 120, 40, 35); //head

  fill(0,0,0); //black
  ellipse(40, 115, 2, 2); //eyes
  ellipse(50, 115, 2, 2);

  line(40,120, 50, 120) // mouth

  fill(Brown); 
  beginShape(); //left ear
  vertex(40, 104);
  vertex(34, 120);
  vertex(25, 117);
  vertex(38, 103);
  vertex(40, 104);
  endShape();

  fill(Brown); 
  beginShape(); //right ear
  vertex(60, 104);
  vertex(65, 120);
  vertex(74, 117);
  vertex(62, 104);
  vertex(60, 104);
  endShape();

  fill(Brown);
  dogLeg(70,150); //left front leg

  fill(Brown);
  dogLeg(80,150); //right front leg

  fill(Brown);
  dogLeg(150,150); //left back leg
  
  fill(Brown);
  dogLeg(160,150); //right back leg

  fill(Brown);
  beginShape(); //tail
  vertex(170,120);
  vertex(180,100);
  vertex(177,122);
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
