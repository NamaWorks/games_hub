import { printGridTiar } from "./print-grid-tiar";
import { resetGridTiar } from "./reset-grid-tiar";
import { showGameRulesTiar } from "./show-rules-tiar";

export const threeInARow = () => {
  showGameRulesTiar();
  resetGridTiar();
  printGridTiar();
};
