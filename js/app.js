const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4",
];

// Variable de estado para saber en qué índice de foto nos encontramos
let index = 2;

// Cargo la imagen que apunta la variable de estado
let slider = document.querySelector(".img-container");
slider.style.backgroundImage = `url('img/${pictures[index]}.jpeg')`;

// buena suerte

//1. Seleccionamos botón izquierdo
const buttonLeft = document.querySelector(".btn-left");

//2. Seleccionamos botón derecho
const buttonRight = document.querySelector(".btn-right");

buttonLeft.addEventListener("click", function () {
  console.log("Flecha izquierda pulsada");

  // 1. Tenemos que decrementar la variable 'index' en una unidad
  index--;

  // 1.1 En el momento que index vale -1, entonces tenemos que hacer que el indice valga de nuevo el último elemento del array
  if (index==-1) {
    index = pictures.length - 1; // esto es siempre el último índice válido de un array
  }

  // 2. Tenemos que actualizar el estilo en linea slider.style.backgroundImage 
  slider.style.backgroundImage = `url('img/${pictures[index]}.jpeg')`;

});
buttonRight.addEventListener("click", function () {
  console.log("flecha derecha pulsada");

  // 1. Tenemos que aumentar la variable 'index' en una unidad
  index++;

  // 1.1 Si he llegado a un índice que no existe en el array, tengo que volver a ponerlo a 0
  if (index==pictures.length) {
    index = 0;
  }

  console.log("Imagen que voy a cargar ahora: ", pictures[index]);

  // 2. Tenemos que actualizar el estilo en linea slider.style.backgroundImage 
  slider.style.backgroundImage = `url('img/${pictures[index]}.jpeg')`;

});