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
let firstPlayerSelected = false;
let startingPlayer;


export const playerChoiceTiar = () => {
  firstPlayerSelected = false;

    let whoStartsTiarText01 = createTextLine("games-hub", data.texts.textsGames.threeInARow.inGameTexts.inGameText01);
    printInCommandLine(whoStartsTiarText01);
    const inputMain = document.querySelector("#input-main");
    inputMain.addEventListener("keydown", function addGetStartingPlayer (event) {getStartingPlayer(event);});
};




let getStartingPlayer = (event) => {
  const inputMain = document.querySelector("#input-main");
  if (event.code === "Enter"){

    if(!firstPlayerSelected){


      if (inputMain.value === "x") {
        startingPlayer = inputMain.value
        // sessionStorage.setItem("lastPlayerTiar", "x");
        // let lastPlayerTiar = sessionStorage.getItem("lastPlayerTiar");
        let startingPlayerText = createTextLine("games-hub", `[${inputMain.value}] will start then`);
        printInCommandLine(startingPlayerText)
        firstPlayerSelected = true
        console.log(`firstPlayerSelected after [x] = ` + firstPlayerSelected)
  

      } else if (inputMain.value === "o") {
        startingPlayer = inputMain.value
        // sessionStorage.setItem("lastPlayerTiar", "o");
        // let lastPlayerTiar = sessionStorage.getItem("lastPlayerTiar");
        let startingPlayerText = createTextLine("games-hub", `[${inputMain.value}] will start then`);
        printInCommandLine(startingPlayerText)
        firstPlayerSelected = true
        console.log(`firstPlayerSelected after [o] = ` + firstPlayerSelected)

  
      } else {
        console.log(inputMain.value)
        let notValidValue = createTextLine("games-hub", `${inputMain.value} is not an accepted value, please, write the letter x or the letter o`) 
        printInCommandLine(notValidValue)
        console.log(`firstPlayerSelected after ![x,o] = ` + firstPlayerSelected)
      }

    }
    console.log(startingPlayer)
  }
};


//  AHORA TENEMOS QUE PREPARAR LAS FUNCIONES PARA LOS TURNOS Y CÓMO ESTOS SE VAN A DESARROLLAR
