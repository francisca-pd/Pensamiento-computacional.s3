function setup() {
  createCanvas(878, 913);
  noStroke();
}

function draw() {
  background(44,101,146);
  
   //cuadrado negro
  fill(0)
  rect(182, 202, 95, 99)  
  
  //cuadrado rojo
  fill(216,12,5)
  rect(275, 301, 255, 257);
  
  //cuadrado amarillo
  fill(253,163,5)
  rect(597,176,60,62)
  
  //réctangulo beige
  fill(255,228,157)
  rect(533,230,124,70)
  
  //cuadrado naranjo
  fill(255,120,28)
  rect(657,301,63,61)
  
  //triángulo beige
  fill(255,247,188)
  triangle(153, 559, 278, 559, 215, 628)

  //triángulo morado
  fill(170,155,158)
  triangle(153, 630, 278, 630, 215, 697)
  
  //triángulo naranjoso
  fill(212,140,82)
  triangle(153, 700, 278, 700, 215, 766)
  
  //círculo celeste
  fill(91,172,191)
circle(627, 570, 192);

}