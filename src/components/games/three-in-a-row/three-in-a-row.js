import { gameplayTiar } from "./gamepley-tiar";
import { printGridTiar } from "./print-grid-tiar";
import { resetGridTiar } from "./reset-grid-tiar";
import { showGameRulesTiar , showWelcomeMessageTiar } from "./messages-tiar";

export const threeInARow = () => {
  showWelcomeMessageTiar()
  showGameRulesTiar();
  resetGridTiar();
  gameplayTiar();
  // printGridTiar();
};
