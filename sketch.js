// Variables
let estado = 0; 
let puntaje = 0;
let caidaX = 300; 
let caidaY = 0;   
let numeroSuerte = '111'; 
let frase = 'Vendrán días mejores'; 

let cancionFondo;
let fondoMenu;

// Cargar multimedia
function preload() {
  cancionFondo = loadSound('musicafondoexamenpc.mp3'); 
  fondoMenu = loadImage('fotofondomenuexamenpc.jpg');
}

// Configuracion inicial
function setup() {
  createCanvas(600, 600);
  caidaX = random(50, 550); 
  cambiarNumero(); 
}

function draw() {
  if (estado == 0) { //Pantalla o menu de inicio
    pantallaInicio();
  } 
  else if (estado == 1) { //Juego
    pantallaJuego();
  } 
  else if (estado == 2) { //Pantalla o menu final
    pantallaFin();
  }
}

// Pantalla o menu de inicio
function pantallaInicio() {
  image(fondoMenu, 0, 0, width, height);

  textAlign(CENTER, CENTER);
  
  //Texto pantalla o menu de inicio
  stroke(120, 20, 80); 
  strokeWeight(4);
  fill(255); 
  textSize(50);
  text("AURA CATCHER", width / 2, height / 2 - 20);
  
  strokeWeight(2);
  textSize(18);
  text("Presiona la tecla ESPACIO para comenzar", width / 2, height / 2 + 40);
  
  noStroke(); 
}

// Pantalla de juego
function pantallaJuego() {
  
  //Fondo con eco
  fill(245, 245, 245, 60);
  noStroke();
  rect(0, 0, width, height);

  //Grilla para mantener orden
  stroke(220);
  strokeWeight(1);
  for (let i = 0; i < width; i = i + 100) {
    line(i, 0, i, height);
  }
  noStroke();

  //Caida
  caidaY = caidaY + 3 + (puntaje * 0.5); 

  //Circulo que se atrapa
  fill(255, 200, 255, 100); 
  ellipse(caidaX, caidaY, 80, 80); 
  fill(255); 
  ellipse(caidaX, caidaY, 50, 50); 

  //Aura del jugador
  let colorMapeado = map(mouseX, 0, width, 150, 255);
  dibujarAura(mouseX, height - 50, colorMapeado);

  //El usuario debe alcanzar todos los circulos que caigan
  if (caidaY > height - 70 && caidaY < height - 30 && caidaX > mouseX - 50 && caidaX < mouseX + 50) {
    puntaje = puntaje + 1;
    caidaY = 0; 
    caidaX = random(50, 550); 
  }

  //Si el circulo toca el borde del canvas, el usuario pierde el juego
  if (caidaY > height + 40) { 
    estado = 2; 
    cancionFondo.stop(); 
    cambiarNumero(); 
  }

  //Puntaje en pantalla
  fill(100);
  textSize(16);
  textAlign(LEFT, TOP);
  text("Nivel de Vibración: " + puntaje, 20, 20);
}

// Pantalla final o menú final
function pantallaFin() {
  background(255, 230, 240); 
  fill(120, 50, 80); 
  textAlign(CENTER, CENTER);
  noStroke();
  
  //Número
  textSize(45);
  text(numeroSuerte, width / 2, height / 2 - 50);
  
  //Frase motivacional abajo
  textSize(22);
  text(frase, width / 2, height / 2 - 10);
  
  //UI de reinicio
  textSize(16);
  fill(100);
  text("Vibración lograda: " + puntaje, width / 2, height / 2 + 50);
  text("Haz CLIC en la pantalla para reiniciar", width / 2, height / 2 + 90);
}

// Dibujo de circulos del aura
function dibujarAura(x, y, colorBase) {
  noStroke();
  for (let i = 0; i < 4; i++) {
    fill(colorBase, 180, 200, 40);
    ellipse(x, y, 90 - (i * 15), 90 - (i * 15));
  }
}

// Cambiar el mensaje, 5 opciones
function cambiarNumero() {
  let azar = int(random(1, 6)); 
  
  if (azar == 1) { 
    numeroSuerte = '111';
    frase = 'Vendrán días mejores';
  } 
  else if (azar == 2) { 
    numeroSuerte = '222';
    frase = 'Estás en el camino correcto';
  } 
  else if (azar == 3) { 
    numeroSuerte = '333';
    frase = 'Tus guías te acompañan';
  } 
  else if (azar == 4) { 
    numeroSuerte = '555';
    frase = 'Tienes todo bajo control';
  }
  else if (azar == 5) { 
    numeroSuerte = '777';
    frase = 'La suerte está de tu lado';
  }
}

// Interacciones con el teclado
function keyPressed() {
  
  //Se aprieta la tecla espacio para empezar el juego
  if (estado == 0 && key == ' ') {
    estado = 1; 
    cancionFondo.loop(); 
  }
}

// Interacciones con el mouse
function mousePressed() {
  
  //Se hace clic en la pantalla para reiniciar el juego
  if (estado == 2) {
    estado = 1;      
    puntaje = 0;     
    caidaY = 0;      
    caidaX = random(50, 550); 
    cancionFondo.loop(); 
  }
}