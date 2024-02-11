import { createTextLine } from "../../single_functions/create-text-line";
import { data } from "../../../data/data";
import { printInCommandLine } from "../../single_functions/print-in-commandline";
import { gridTiar, printGridTiar } from "./print-grid-tiar";
import { getRandomInteger } from "../../single_functions/get-random-integer";

let lastPlayerTiar = sessionStorage.getItem("lastPlayerTiar");
let firstPlayerSelected = false;
let turnPlayer;
let roundsCounter = 0;



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
        // THIS PLAYER WILL BE THE USER
        turnPlayer = inputMain.value
        let startingPlayerText = createTextLine("games-hub", `[${inputMain.value}] will start then`);
        printInCommandLine(startingPlayerText)
        firstPlayerSelected = true
        turnPlayer = inputMain.value
        turnsTiar()


      } else if (inputMain.value === "o") {
        // THIS PLAYER WILL BE THE MACHINE
        turnPlayer = inputMain.value
        let startingPlayerText = createTextLine("games-hub", `[${inputMain.value}] will start then`);
        printInCommandLine(startingPlayerText)
        firstPlayerSelected = true
        turnPlayer = inputMain.value
        turnsTiar()
  
      } else {
        let notValidValue = createTextLine("games-hub", `${inputMain.value} is not an accepted value, please, write the letter x or the letter o`) 
        printInCommandLine(notValidValue)
      }

    }
    console.log(`the player for this turn is: ` + turnPlayer)
  }
};

//  AHORA TENEMOS QUE PREPARAR LAS FUNCIONES PARA LOS TURNOS Y CÓMO ESTOS SE VAN A DESARROLLAR
const turnsTiar = () => {
if (roundsCounter <= 9) {
  if(turnPlayer == "x") {
    // console.log ("no hay rondas jugadas")
    userTurn()
  } if (turnPlayer == "o") {
    machineTurn()
    // console.log('Hay rondas jugadas')
  }
}
}

const userTurn = () => {
  printGridTiar()
  let availableOptions = getAvailablePositionsTiar()
  printAvailableOptions(availableOptions)
  const inputMain = document.querySelector("#input-main");
  inputMain.addEventListener("keydown", function addWriteSelectedOption (event) {writeSelectedOption(event);});
  // PENDING TO PREPARE THE CHECKER FUNCTION
  // threeInARowChecker()

  roundsCounter++
}

const machineTurn = () => {
  let randomInteger = getRandomInteger(0,8)
  let availableOptions = getAvailablePositionsTiar()
  let chosenOption = availableOptions[randomInteger]
  let chosenOptionArr = chosenOption.split(" ")
  let rowName = chosenOptionArr[0]
  let columnNumber = getSelectedColumnNumber(chosenOption)
  modifyGridTiar(rowName, columnNumber, "o")
  roundsCounter++
  changeTurnPlayer()
}


let availablePositions = [];
const getAvailablePositionsTiar = () => {
  
  // console.log(gridTiar)
  for (const row in gridTiar) {
    let rowContent = gridTiar[row];
    let positionAcc = 0
    rowContent.forEach(item => {
      positionAcc ++
      
      let availablePosition = row + " " + "column0" +  positionAcc
      
      availablePositions.push(availablePosition)
      
    });
    
  }
  return availablePositions
}

const printAvailableOptions = (arr) => {
  let currentOptionsText = createTextLine("games-hub", `these are the current available options:`)
  printInCommandLine(currentOptionsText)
  
  arr.forEach(availableOption => {
    let availableOptionLine = createTextLine("games-hub", availableOption)
    printInCommandLine(availableOptionLine)
  });
}

const getSelectedColumnNumber = (string) => {
  let arrayFromString = string.split()
  let arrayFromStringLength = arrayFromString.length
  let column = arrayFromString[arrayFromStringLength-1]
  let columnNumber = column.slice(-1)
  return columnNumber
}

const writeSelectedOption = (event) => {
  if(event.code == "Enter"){
    const inputMain = document.querySelector("#input-main");
    if(availablePositions.includes(inputMain.value)){
      let inputMainValue = inputMain.value
      let arrayInputMainValue = inputMainValue.split(" ")
      let columnNumber = getSelectedColumnNumber(arrayInputMainValue[1])
      let row = arrayInputMainValue[0]
      console.log(`column number = ` + columnNumber)
      modifyGridTiar(row , columnNumber, "x")
      changeTurnPlayer()
    } else {
      let notvalidOptionText = createTextLine("games-hub", `that's not a valid option, try using one of the listed above` )
      printInCommandLine(notvalidOptionText)
    }
  } 
}

const modifyGridTiar = (rowName , columnNumber , icon) => {
  let column = columnNumber - 1
  // console.log(column)
  gridTiar[rowName][column] = icon
  // console.log(gridTiar)
  printGridTiar()
}

const changeTurnPlayer = () => {
  if(turnPlayer == "x"){
    turnPlayer = "o"
  } else if (turnPlayer == "o" ){
    turnPlayer = "x"
  }
}
