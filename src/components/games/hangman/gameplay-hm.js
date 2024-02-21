import { getRandomInteger } from "../../single_functions/get-random-integer";
import { data } from "../../../data/data";
import { createTextLine } from "../../single_functions/create-text-line";
import { printInCommandLine } from "../../single_functions/print-in-commandline";
import { inputMain } from "../../../data/constant-variables";

const wordsList = data.texts.textsGames.hangMan.inGameTexts.wordsToGuess
let wordsListLength = wordsList.length
sessionStorage.setItem("selectedWord", "")
sessionStorage.setItem("selectedWordArr", "")
sessionStorage.setItem("dashesWord", "")

export const getRandomWord = () => {
  let randomInteger = getRandomInteger(0, wordsListLength -1)
let selectedWord = wordsList[randomInteger]
sessionStorage.setItem("selectedWord", selectedWord)

let selectedWordSs = sessionStorage.getItem("selectedWord")
let dashesWord = []
for (let i = 0; i < selectedWordSs.length; i++) {
  dashesWord.push("_")
}
let stringDashes = JSON.stringify(dashesWord)
sessionStorage.setItem("dashesWord", stringDashes)
}

export const printDashesWord = (arr) => {
  let printDashesWordsText = createTextLine("games-hub", "this is the word you have to guess:")
  printInCommandLine(printDashesWordsText)
  let lineDashesWord = createTextLine("games-hub", arr)
  printInCommandLine(lineDashesWord)
}


export const askForLetter = () => {
  const inputMain = document.querySelector("#input-main");
  let askForLetterText = createTextLine("games-hub", `which letter are you choosing?`)
  printInCommandLine(askForLetterText)
  inputMain.addEventListener("keydown", function addAskForLetterFunction (event) {letterSelection(event);});
}

const letterSelection = (event) => {
  let selectedWord = sessionStorage.getItem("selectedWord")
  const inputMain = document.querySelector("#input-main");
  if(event.code === "Enter") {
    if(selectedWord.includes(inputMain.value)){
      changeDashForLetter(inputMain.value)
    }
  }  
}

const changeDashForLetter = (letter) => {
  let selectedWord = sessionStorage.getItem("selectedWord")
  let dashesWord = sessionStorage.getItem("dashesWord")
  let dashesWordToArr = JSON.parse(dashesWord)
  
  for (let i = 0; i < selectedWord.length; i++) {    
    if(selectedWord[i] == letter){
      dashesWordToArr[i] = letter
    }
  }

  let dashesWordArrToStr = JSON.stringify(dashesWordToArr)
  
  sessionStorage.setItem("dashesWord", dashesWordArrToStr)
  let dashesWordTest = sessionStorage.getItem("dashesWord")
  
  printDashesWord(dashesWordToArr)
}