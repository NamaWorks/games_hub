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
    // console.log(`the player for this turn is: ` + turnPlayer)
  }
};

//? TURNS FUNCTIONS
const turnsTiar = () => {
if (roundsCounter <= 9) {
  if(turnPlayer == "x") {
    userTurn()
    sessionStorage.setItem("lastPlayerTiar", "x")
  } if (turnPlayer == "o") {
    machineTurn()
    sessionStorage.setItem("lastPlayerTiar", "o")
  }
} else if (roundsCounter = 9) {
  endGameTiar()
}
}

const userTurn = () => {
let startUserTurn = createTextLine("user", `now it's the user's turn`)
printInCommandLine(startUserTurn)

    printGridTiar()

  let availableOptions = getAvailablePositionsTiar()
  printAvailableOptions(availableOptions)
  const inputMain = document.querySelector("#input-main");
  inputMain.addEventListener("keydown", function addWriteSelectedOptionUser (event) {writeSelectedOptionUser(event);});

  roundsCounter++
}

const machineTurn = () => {
  if(roundsCounter > 0){
    const inputMain = document.querySelector("#input-main");
    inputMain.removeEventListener("keydown", function addWriteSelectedOptionUser (event) {writeSelectedOptionUser(event);});
  }
  let availableOptions = getAvailablePositionsTiar()
  let randomInteger = getRandomInteger(0,availableOptions.length - 1)
  let chosenOption = availableOptions[randomInteger]
  let chosenOptionArr = chosenOption.split(" ")
  let rowName = chosenOptionArr[0]
  let columnNumber = getSelectedColumnNumber(chosenOption)
  let machineTurnText = createTextLine("games-hub", `now is the turn for the machine`)
  printInCommandLine(machineTurnText)
  modifyGridTiar(rowName, columnNumber, "o")


  let tiarCheckerTurn = tiarChecker("o")
  // console.log(tiarCheckerTurn)

  if (!tiarCheckerTurn) {
    changeTurnPlayer()
  }
  
  roundsCounter++
}

//? AVAILABLE OPTIONS
const getAvailablePositionsTiar = () => {
  availablePositions=[]
  for (const row in gridTiar) {
    let rowContent = gridTiar[row];
    let positionAcc = 0
    // console.log(`the rowContent:`)
    // console.log(rowContent)
    rowContent.forEach(item => {
      positionAcc ++
      if(item === "-"){
        // console.log(`the item is = ${item}`)
      let availablePosition = row + " " + "column0" +  positionAcc
      
      availablePositions.push(availablePosition)
      // console.log(availablePositions)
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

      let tiarCheckerTurn = tiarChecker("x")
      // console.log(tiarCheckerTurn)

      if (!tiarCheckerTurn) {
        changeTurnPlayer()
      }
    } else {
      // setTimeout(() => {
      //   console.log(`not valid option given: ` + inputMain.value)
      //   let notvalidOptionText = createTextLine("games-hub", `that's not a valid option, try using one of the listed above` )
      //   printInCommandLine(notvalidOptionText)
      // }, 1000);
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
  if(icon == "x"){
//! check horizontal liness
console.log(gridTiar)
// we iterate all the rows
for (const row in gridTiar) {

}
}
}

// Prepare a clean command line function in order to show the final grid and the winner message
const endGameTiar = (player) => {
console.log(`the winner is: ${player}`)
  console.log(`the game ends here`)
}

const drawGameTiar = () => {

}