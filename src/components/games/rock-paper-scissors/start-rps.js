import { createTextLine } from "../../single_functions/create-text-line";
import { data } from "../../../data/data";
import { printInCommandLine } from "../../single_functions/print-in-commandline";

export const startRps = () => {
  let textsLocation = data.texts.textsGames.rockPaperScissors;
  let welcomeText = createTextLine(
    "games-hub",
    data.texts.textsGames.rockPaperScissors.welcome.welcome01
  );
  printInCommandLine(welcomeText);

  let rulesText01 = createTextLine("games-hub", textsLocation.rules.rules01);
  printInCommandLine(rulesText01);
  let rulesText02 = createTextLine("games-hub", textsLocation.rules.rules02);
  printInCommandLine(rulesText02);
  let rulesText03 = createTextLine("games-hub", textsLocation.rules.rules03);
  printInCommandLine(rulesText03);
  let rulesText04 = createTextLine("games-hub", textsLocation.rules.rules04);
  printInCommandLine(rulesText04);
};
