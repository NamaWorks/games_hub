import { createTextLine } from "../single_functions/create-text-line";
import { data } from "../../data/data";
import { printInCommandLine } from "../single_functions/print-in-commandline";

let textsLocation = data.texts.textsGames.rockPaperScissors;
export const initRockPaperScissors = () => {
  let welcomeText = createTextLine(
    "games-hub",
    data.texts.textsGames.rockPaperScissors.welcome
  );
  printInCommandLine(welcomeText);
};
