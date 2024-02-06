import { printGridTiar } from "./print-grid-tiar";
import { turnTiar } from "./who-starts-tiar";

// export let lastPlayerTiar;

export const gameplayTiar = () => {
  sessionStorage.setItem("lastPlayerTiar", "");
  // función de elegir quién comienza, si jugador 01 o jugador 02
  turnTiar();
  // función de presentar la cuadrícula
  // función de presentar las opciones disponibles para poner la nueva ficha
  // función de pintar la nueva cuadrícula
  // función de cambiar el jugador de turno
  // función para cuando alguien gana/pierde/empate
  // función para reiniciar el juego
};
