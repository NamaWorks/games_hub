import { playerChoiceTiar } from "./player-selection-turns-tiar";
import { printGridTiar } from "./print-grid-tiar";

// export let lastPlayerTiar;

export const gameplayTiar = () => {
  sessionStorage.setItem("lastPlayerTiar", "");
  playerChoiceTiar()
};
