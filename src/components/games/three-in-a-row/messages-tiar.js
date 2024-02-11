import { data } from "../../../data/data";
import { createTextLine } from "../../single_functions/create-text-line";
import { printInCommandLine } from "../../single_functions/print-in-commandline";

export const showGameRulesTiar = () => {

  let rulesLine = createTextLine(
    "games-hub",
    data.texts.textsGames.threeInARow.rules.rules01
  );
  printInCommandLine(rulesLine);
};
export const showWelcomeMessageTiar = () => {
  let welcomeLine = createTextLine(
    "games-hub",
    data.texts.textsGames.threeInARow.welcome.welcome01
  );
  

  printInCommandLine(welcomeLine);
  
};
