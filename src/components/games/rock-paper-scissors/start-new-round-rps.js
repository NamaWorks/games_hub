import { data } from "../../../data/data";
import { getRandomInteger } from "../../single_functions/get-random-integer";
import { createTextLine } from "../../single_functions/create-text-line";
import { printInCommandLine } from "../../single_functions/print-in-commandline";

export const startNewRoundRps = () => {
  let matchNumberRps = localStorage.getItem("startedMatchesRps");
  localStorage.setItem("startedMatchesRps", Number(matchNumberRps) + 1);

  let yourChoiceTextLine = createTextLine("games-hub", `what's your choice?`);
  printInCommandLine(yourChoiceTextLine);
};
