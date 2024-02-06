import { createTextLine } from "../../single_functions/create-text-line";
import { data } from "../../../data/data";
import { printInCommandLine } from "../../single_functions/print-in-commandline";

const returnPlayerIcon = (number) => {
  if (number === 1) {
    return `-x`;
  } else if (number === -1) {
    return `-0`;
  } else {
    return `${number} that's not a valid value`;
  }
};
let lastPlayerTiar = sessionStorage.getItem("lastPlayerTiar");

export const turnTiar = () => {

    let whoStartsTiarText01 = createTextLine(
      "games-hub",
      data.texts.textsGames.threeInARow.inGameTexts.inGameText01
    );
    printInCommandLine(whoStartsTiarText01);
    const inputMain = document.querySelector("#input-main");
    inputMain.addEventListener("keydown", function addGetStartingPlayer (event) {getStartingPlayer(event);});

};

export let getStartingPlayer = (event) => {
  if (event.code === "Enter") {

    if (inputMain.value === "x") {
      sessionStorage.setItem("lastPlayerTiar", 1);
      console.log(`[${inputMain.value}] is the new value for the lastPlayerTiar`);
      let lastPlayerTiar = sessionStorage.getItem("lastPlayerTiar");

    } else if (inputMain.value === "o") {
      sessionStorage.setItem("lastPlayerTiar", -1);
      console.log(`[${inputMain.value}] is the new value for the lastPlayerTiar`);
      let lastPlayerTiar = sessionStorage.getItem("lastPlayerTiar");
    }
    let startingPlayerText = createTextLine("games-hub", `${inputMain.value} will start then`);
    printInCommandLine(startingPlayerText)
  }
  // const inputMain = document.querySelector("#input-main");
  //! We need to remove this function from the keydown event listener in the inputMain
  // inputMain.removeEventListener(addGetStartingPlayer())
};
