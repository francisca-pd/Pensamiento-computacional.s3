//Variables de color
let rojo = 255;
let verde = 180;
let azul = 200; 

//Texto inicial
let numeroSuerte = '111';

function setup() {
  createCanvas(600, 600);
  background(245);
}

function draw() {
  // Efecto de eco circulares
  push();
  fill(245, 245, 245, 30);
  noStroke();
  rect(0, 0, width, height);
  pop();

  //Grilla
  for (let x = 100; x < width; x = x + 200) {
    for (let y = 100; y < height; y = y + 200) {
      
      //Interactividad con el mouse
      if (mouseX > x - 90 && mouseX < x + 90 && mouseY > y - 90 && mouseY < y + 90) {
        let tamanoVariable = map(mouseX, 0, width, 80, 150);
        dibujarAura(x, y, tamanoVariable);
      }

      //Grilla fija y texto inicial dentro de la grilla
      push();
      noFill();
      stroke(180);
      rect(x - 90, y - 90, 180, 180);
      
      fill(100);
      noStroke();
      textSize(16);
      text(numeroSuerte, x - 15, y + 80);
      pop();
    }
  }
}

// Función del aura
function dibujarAura(posicionX, posicionY, tamano) {
  push();
  noStroke();
  for (let i = 0; i < 5; i++) {
    fill(rojo, verde, azul, 25); 
    ellipse(posicionX, posicionY, tamano - (i * 40), tamano - (i * 40));
  }
  pop();
}

// Interacciones con el teclado
function keyPressed() {
  
  //TECLA C: Cambiar el color, son 4 opciones
  if (key == 'c') {
    let opcionColor = int(random(1, 5));

    if (opcionColor == 1) { //Rosa pastel
      rojo = 255; 
      verde = 180; 
      azul = 200;
    } 
    else if (opcionColor == 2) { //Morado pastel
      rojo = 200; 
      verde = 180; 
      azul = 255;
    } 
    else if (opcionColor == 3) { //Celeste
      rojo = 180; 
      verde = 220; 
      azul = 255;
    } 
    else if (opcionColor == 4) { //Amarillo pastel
      rojo = 255; 
      verde = 250; 
      azul = 180;
    }
  }
  
  // TECLA T: Cambiar el texto, 4 opciones
  if (key == 't') {
    let opcionTexto = int(random(1, 5));

    if (opcionTexto == 1) {
      numeroSuerte = '111';
    } 
    else if (opcionTexto == 2) {
      numeroSuerte = '333';
    } 
    else if (opcionTexto == 3) {
      numeroSuerte = '555';
    } 
    else if (opcionTexto == 4) {
      numeroSuerte = '999';
    }
  }
}