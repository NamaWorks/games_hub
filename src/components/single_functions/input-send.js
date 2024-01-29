import { createTextLine } from "./create-text-line";
import { printInCommandLine } from "./print-in-commandline";
import { data } from "../../data/data";
import { cleanCommandLine } from "./clean-command-line";

export const inputSend = (event) => {
  // console.log(event);
  if (event.code === "Enter") {
    let inputMain = document.querySelector("#input-main");
    let inputMainValue = inputMain.value;
    let commandsLocation = data.sections.legend.commands;

    // console.log(commandsLocation);

    printInCommandLine(inputMainValue);

    for (const command in commandsLocation) {
      // console.log(command);
      if (commandsLocation[command].commandInput === `${inputMainValue}`) {
        console.log(command);
        if (command === "showScores") {
          //! showScores()
        } else if (command === "resetScores") {
          //! resetScores()
        } else if (command === "changeName") {
          //! changeName()
        } else if (command === "changeGame") {
          //! changeGame()
        } else if (command === "cleanCommandLine") {
          cleanCommandLine();
        }
      }
    }

    inputMain.value = "";
  }
};
