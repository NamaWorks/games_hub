import { createTextLine } from "../../single_functions/create-text-line";
import { data } from "../../../data/data";
import { printInCommandLine } from "../../single_functions/print-in-commandline";
import { gridTiar, printGridTiar } from "./print-grid-tiar";
import { getRandomInteger } from "../../single_functions/get-random-integer";

let lastPlayerTiar = sessionStorage.getItem("lastPlayerTiar");
let firstPlayerSelected = false;
let turnPlayer;
let roundsCounter = 0;
let availablePositions = [];
let checkedTiar = 0



export const playerChoiceTiar = () => {
  firstPlayerSelected = false;
  checkedTiar = 0;

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
    // console.log(`the player for this turn is: ` + turnPlayer)
  }
};

//? TURNS FUNCTIONS
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
  // console.log(gridTiar)
  // printGridTiar()
  let availableOptions = getAvailablePositionsTiar()
  printAvailableOptions(availableOptions)
  const inputMain = document.querySelector("#input-main");
  inputMain.addEventListener("keydown", function addWriteSelectedOptionUser (event) {writeSelectedOptionUser(event);});

  roundsCounter++
}

const machineTurn = () => {
  let randomInteger = getRandomInteger(0,8)
  let availableOptions = getAvailablePositionsTiar()
  let chosenOption = availableOptions[randomInteger]
  let chosenOptionArr = chosenOption.split(" ")
  let rowName = chosenOptionArr[0]
  let columnNumber = getSelectedColumnNumber(chosenOption)
  let machineTurnText = createTextLine("games-hub", `now is the turn for the machine`)
  printInCommandLine(machineTurnText)
  modifyGridTiar(rowName, columnNumber, "o")

  
  tiarChecker()
  roundsCounter++
  changeTurnPlayer()
}

//? AVAILABLE OPTIONS
const getAvailablePositionsTiar = () => {
  availablePositions=[]
  for (const row in gridTiar) {
    let rowContent = gridTiar[row];
    let positionAcc = 0
    console.log(`the rowContent:`)
    console.log(rowContent)
    rowContent.forEach(item => {
      positionAcc ++
      console.log(`the item is = ${item}`)
      if(item = "-"){
      
      let availablePosition = row + " " + "column0" +  positionAcc
      
      availablePositions.push(availablePosition)
      console.log(availablePositions)
    } else {}
      
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

const writeSelectedOptionUser = (event) => {
  if(event.code == "Enter"){
    const inputMain = document.querySelector("#input-main");
    if(availablePositions.includes(inputMain.value)){
      let inputMainValue = inputMain.value
      let arrayInputMainValue = inputMainValue.split(" ")
      let columnNumber = getSelectedColumnNumber(arrayInputMainValue[1])
      let row = arrayInputMainValue[0]
      modifyGridTiar(row , columnNumber, "x")

      tiarChecker()

      changeTurnPlayer()
    } else {
      let notvalidOptionText = createTextLine("games-hub", `that's not a valid option, try using one of the listed above` )
      printInCommandLine(notvalidOptionText)
    }
  } 
}

//? MODIFY GRID WITH SELECTION
const modifyGridTiar = (rowName , columnNumber , icon) => {
  let column = columnNumber -1 
  // console.log(column)
  gridTiar[rowName][column] = icon
  // console.log(gridTiar)
  printGridTiar()
}

//? CHANGE PLAYER FOR NEXT TURN
const changeTurnPlayer = () => {
  if(turnPlayer == "x"){
    turnPlayer = "o"
    turnsTiar()
  } else if (turnPlayer == "o" ){
    turnPlayer = "x"
    turnsTiar()
  }
}

//! GRID CHECKER FUNCTION
const tiarChecker =  (icon) => {
  if(icon == "x" || icon == "o"){
  // console.log(gridTiar.row01)
   if(gridTiar.row01 = [icon, icon, icon]){
    endGameTiar()
   } else if (gridTiar.row02 = [icon, icon, icon]){
    endGameTiar()
   } else if (gridTiar.row03 = [icon, icon, icon]){
    endGameTiar()
   } else if (gridTiar.row01[0] == icon && gridTiar.row02[1] == icon && gridTiar.row03[2] == icon) {
    endGameTiar()
   } else if (gridTiar.row01[2] == icon && gridTiar.row02[1] == icon && gridTiar.row03[0] == icon) {
    endGameTiar()
   }
  }
}

const endGameTiar = () => {
console.log(`the game ends here`)
}