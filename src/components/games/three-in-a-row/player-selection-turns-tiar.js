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

localStorage.setItem("tiarRoundsPlayed", 0)
localStorage.setItem("tiarRoundsWon", 0)




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


  let checkedTiar = tiarChecker()
if (checkedTiar) {
  endGameTiar("[x]")
} else {drawGameTiarChecker()}

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


let checkedTiar = tiarChecker()
if (checkedTiar) {
  endGameTiar("[o]")
} else {drawGameTiarChecker()}
  
  roundsCounter++

  changeTurnPlayer()
}

//? AVAILABLE OPTIONS
const getAvailablePositionsTiar = () => {
  availablePositions=[]
  for (const row in gridTiar) {
    let rowContent = gridTiar[row];
    let positionAcc = 0
    rowContent.forEach(item => {
      positionAcc ++
      if(item === "-"){
      let availablePosition = row + " " + "column0" +  positionAcc
      
      availablePositions.push(availablePosition)
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

  let checkedTiar = tiarChecker()
  if(!checkedTiar){
  	changeTurnPlayer()
  }

  } 
}
}

//? MODIFY GRID WITH SELECTION
const modifyGridTiar = (rowName , columnNumber , icon) => {
  let column = columnNumber -1 
  gridTiar[rowName][column] = icon
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

const tiarChecker =  () => {
// Check rows
let hasWinningRow = checkWinningRows(gridTiar)
let hasWinningColumn = checkWinningColumns(gridTiar)
let hasWinningDiagonals = checkWinningDiagonals(gridTiar)

if (hasWinningColumn || hasWinningDiagonals || hasWinningRow) {
  return true
} else false

}

function checkWinningRows(grid) {
  // Iterate through each row
  for (const rowKey in grid) {
    const row = grid[rowKey];
    if (row[0] === row[1] && row[1] === row[2] && row[0] !== "-") {
      // Found a winning row with identical icons
      return true;
    }
  }
  // No winning rows found
  return false;
}

function checkWinningColumns(grid) {
  // Transpose the grid to create a new grid with columns as rows
  const transposedGrid = Object.keys(grid).map((rowKey) => grid[rowKey]);

  // Use the same logic as checking rows
  return checkWinningRows(transposedGrid);
}

function checkWinningDiagonals(grid) {
  // Check forward diagonal (top-left to bottom-right)
  const forwardDiagonal = [grid.row01[0], grid.row02[1], grid.row03[2]];
  if (areAllElementsEqual(forwardDiagonal)) {
    return true;
  }

  // Check backward diagonal (top-right to bottom-left)
  const backwardDiagonal = [grid.row01[2], grid.row02[1], grid.row03[0]];
  if (areAllElementsEqual(backwardDiagonal)) {
    return true;
  }

  return false;
}

// Helper function to check if all elements in an array are equal
function areAllElementsEqual(arr) {
  return arr.every((element) => element !== "-" && element === arr[0]);
}

// Prepare a clean command line function in order to show the final grid and the winner message
const endGameTiar = (player) => {
console.log(`the winner is: ${player}`)
  console.log(`the game ends here`)
}

const drawGameTiarChecker = () => {
  
}