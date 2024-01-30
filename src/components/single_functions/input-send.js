import { createTextLine } from "./create-text-line";
import { printInCommandLine } from "./print-in-commandline";
import { data } from "../../data/data";
import { cleanCommandLine } from "./clean-command-line";
import { changeGameB } from "../games/change-game-b";

export const inputSend = (event) => {
  // console.log(event);
  if (event.code === "Enter") {
    let inputMain = document.querySelector("#input-main");
    let inputMainValue = inputMain.value;
    let commandsLocation = data.sections.legend.commands;

    // console.log(commandsLocation);
    let userName = localStorage.getItem("userName") || "user";
    let inputTextLine = createTextLine(userName, inputMainValue);
    printInCommandLine(inputTextLine);

    for (const command in commandsLocation) {
      // console.log(command);
      if (commandsLocation[command].commandInput === `${inputMainValue}`) {
        console.log(command);
        if (command === "showScores") {
          showScores();
        } else if (command === "resetScores") {
          resetScores();
        } else if (command === "changeGameA") {
          changeGameA();
        } else if (command === "changeGameB") {
          changeGameB();
        } else if (command === "changeGameC") {
          changeGameC();
        } else if (command === "cleanCommandLine") {
          cleanCommandLine();
        }
      }
    }

    inputMain.value = "";
  }
};
