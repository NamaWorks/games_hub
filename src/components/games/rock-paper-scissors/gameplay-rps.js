import { getLastInputValue } from "../../single_functions/input-send";
import { getRandomInteger } from "../../single_functions/get-random-integer";
import { data } from "../../../data/data";
import { createTextLine } from "../../single_functions/create-text-line";
import { printInCommandLine } from "../../single_functions/print-in-commandline";
import { inputSend } from "../../single_functions/input-send";
import { endGameMessage } from "../../single_functions/general-messages";

let machineChoice;
let inGameText01 =
  data.texts.textsGames.rockPaperScissors.inGameTexts.inGameText01;
let inGameTextWin =
  data.texts.textsGames.rockPaperScissors.inGameTexts.inGameText02;
let inGameTextLose =
  data.texts.textsGames.rockPaperScissors.inGameTexts.inGameText03;
let inGameTextDraw =
  data.texts.textsGames.rockPaperScissors.inGameTexts.inGameText04;

export const machineSideRps = () => {
  let lastInputValue = getLastInputValue();
  // console.log(lastInputValue);
  if (lastInputValue === "-cg-rps") {
    const optionsArray = ["rock", "paper", "scissors"];
    let randomInteger = getRandomInteger(0, 2);
    machineChoice = optionsArray[randomInteger];
    console.log(machineChoice);
  }
};

const eventListenerRps = (event) => {
  if (event.code === "Enter") {
    let inputMain = document.querySelector("#input-main");
    let inputMainValue = inputMain.value;
    if (inputMainValue === machineChoice) {
      let machineChoiceAnnounce = createTextLine(
        "games-hub",
        `the machine chooses ${machineChoice}`
      );
      printInCommandLine(machineChoiceAnnounce);
      let drawTextRps = createTextLine("games-hub", inGameTextDraw);
      printInCommandLine(drawTextRps);
      removeEventListenerFromInputRps();
            removeEventListenerFromInputRps();
      endGameMessage()
    } else if (inputMainValue === "rock") {
      if (machineChoice === "paper") {
        let machineChoiceAnnounce = createTextLine(
          "games-hub",
          `the machine chooses ${machineChoice}`
        );
        printInCommandLine(machineChoiceAnnounce);
        let loseTextRps = createTextLine("games-hub", inGameTextLose);
        printInCommandLine(loseTextRps);
      } else if (machineChoice === "scissors") {
        let machineChoiceAnnounce = createTextLine(
          "games-hub",
          `the machine chooses ${machineChoice}`
        );
        printInCommandLine(machineChoiceAnnounce);
        let winTextRps = createTextLine("games-hub", inGameTextWin);
        printInCommandLine(winTextRps);
      }
            removeEventListenerFromInputRps();
      endGameMessage()
    } else if (inputMainValue === "paper") {
      if (machineChoice === "scissors") {
        let machineChoiceAnnounce = createTextLine(
          "games-hub",
          `the machine chooses ${machineChoice}`
        );
        printInCommandLine(machineChoiceAnnounce);
        let loseTextRps = createTextLine("games-hub", inGameTextLose);
        printInCommandLine(loseTextRps);
      } else if (machineChoice === "rock") {
        let machineChoiceAnnounce = createTextLine(
          "games-hub",
          `the machine chooses ${machineChoice}`
        );
        printInCommandLine(machineChoiceAnnounce);
        let winTextRps = createTextLine("games-hub", inGameTextWin);
        printInCommandLine(winTextRps);
      }
            removeEventListenerFromInputRps();
      endGameMessage()
    } else if (inputMainValue === "scissors") {
      if (machineChoice === "rock") {
        let machineChoiceAnnounce = createTextLine(
          "games-hub",
          `the machine chooses ${machineChoice}`
        );
        printInCommandLine(machineChoiceAnnounce);
        let loseTextRps = createTextLine("games-hub", inGameTextLose);
        printInCommandLine(loseTextRps);
      } else if (machineChoice === "paper") {
        let machineChoiceAnnounce = createTextLine(
          "games-hub",
          `the machine chooses ${machineChoice}`
        );
        printInCommandLine(machineChoiceAnnounce);
        let winTextRps = createTextLine("games-hub", inGameTextWin);
        printInCommandLine(winTextRps);
      }
            removeEventListenerFromInputRps();
      endGameMessage()
    } else { 
      let notValidAnswer = createTextLine("games-hub", `that's not a valid answer`)
      printInCommandLine(notValidAnswer)
    }
  }
};

export const addEventListenerToInputRps = () => {
  let inputMain = document.querySelector("#input-main");

  inputMain.addEventListener("keydown", function (event) {
    eventListenerRps(event);
  });
};

export let removeEventListenerFromInputRps = () => {
  let inputMain = document.querySelector("#input-main");
  inputMain.removeEventListener("keydown", function (event) {
    eventListenerRps(event);
  });
};
