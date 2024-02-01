import { createTextLine } from "./create-text-line";
import { printInCommandLine } from "./print-in-commandline";
import { data } from "../../data/data";
import { cleanCommandLine } from "./clean-command-line";
import { startRps } from "../games/rock-paper-scissors/start-rps";
import { rockPaperScissors } from "../games/rock-paper-scissors/rock-paper-scissors";
import { resetScores } from "./reset-scores";
import { threeInARow } from "../games/three-in-a-row/three-in-a-row";

export const setInputValue = (event) => {
  if (event.code === "Enter") {
    let inputMain = document.querySelector("#input-main");
    let inputMainValue = inputMain.value;
    sessionStorage.setItem("lastInputValue", inputMainValue);
  }
};

export const inputSend = (event) => {
  if (event.code === "Enter") {
    let inputMain = document.querySelector("#input-main");
    let inputMainValue = inputMain.value;
    let commandsLocation = data.sections.legend.commands;
    let inputTextLine = createTextLine("user", inputMainValue);
    printInCommandLine(inputTextLine);

    for (const command in commandsLocation) {
      if (commandsLocation[command].commandInput === `${inputMainValue}`) {
        if (command === "showScores") {
          showScores();
        } else if (command === "resetScores") {
          resetScores();
        } else if (command === "changeGameA") {
          threeInARow();
        } else if (command === "changeGameB") {
          rockPaperScissors();
        } else if (command === "changeGameC") {
        } else if (command === "cleanCommandLine") {
          cleanCommandLine();
        }
      }
    }

    // inputMain.value = "";
    inputMain.select();
  }
};

export const getLastInputValue = () => {
  let lastInputValue = sessionStorage.getItem("lastInputValue");
  return lastInputValue;
};
