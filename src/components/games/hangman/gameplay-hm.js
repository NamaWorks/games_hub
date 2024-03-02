import { getRandomInteger } from "../../single_functions/get-random-integer";
import { data } from "../../../data/data";
import { createTextLine } from "../../single_functions/create-text-line";
import { printInCommandLine } from "../../single_functions/print-in-commandline";
import { inputMain } from "../../../data/constant-variables";
import { endGameMessage } from "../../single_functions/general-messages";

const wordsList = data.texts.textsGames.hangMan.inGameTexts.wordsToGuess
let wordsListLength = wordsList.length
sessionStorage.setItem("selectedWord", "")
sessionStorage.setItem("selectedWordArr", "")
sessionStorage.setItem("dashesWord", "")
sessionStorage.setItem("triesLeftHm", 6)
localStorage.setItem("hangManRoundsPlayed", 0)
localStorage.setItem("hangManRoundsWon", 0)

export const getRandomWord = () => {
let hmRoundsPlayed = Number(localStorage.getItem("hangManRoundsPlayed"))
let modifiedHmRoundsPlayed = hmRoundsPlayed + 1
localStorage.setItem("hangManRoundsPlayed", modifiedHmRoundsPlayed )


  let randomInteger = getRandomInteger(0, wordsListLength -1)
let selectedWord = wordsList[randomInteger]
sessionStorage.setItem("selectedWord", selectedWord)

let selectedWordSs = sessionStorage.getItem("selectedWord")
let dashesWord = []
for (let i = 0; i < selectedWordSs.length; i++) {
  dashesWord.push('_')
}
let stringDashes = JSON.stringify(dashesWord)
sessionStorage.setItem("dashesWord", stringDashes)
}

export const printDashesWord = () => {
  let triesLeftHm = sessionStorage.getItem("triesLeftHm")

  let dashesToPrint = JSON.parse(sessionStorage.getItem("dashesWord"))


  let printDashesWordsText = createTextLine("games-hub", "this is the word you have to guess:")
  printInCommandLine(printDashesWordsText)


  let lineDashesWord = createTextLine("games-hub", dashesToPrint)
  printInCommandLine(lineDashesWord)

  let lineTriesleftHm = createTextLine("games-hub", `you have ${sessionStorage.getItem("triesLeftHm")} tries left`)
  printInCommandLine(lineTriesleftHm)

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
  let triesLeftHm = sessionStorage.getItem("triesLeftHm")
  let dashesWord = sessionStorage.getItem("dashesWord")

  if(event.code === "Enter") {
    if(selectedWord.includes(inputMain.value)){
      changeDashForLetter(inputMain.value)
      winMatchChecker()
    } else {
      if (triesLeftHm > 1){
      let modifiedtriesLeftHm = triesLeftHm - 1
      sessionStorage.setItem("triesLeftHm", modifiedtriesLeftHm)
      changeDashForLetter(inputMain.value)
      } else if (triesLeftHm = 1) {
        loseMatch()
        
      }
    };
  }
}

const winMatchChecker = () => {
  let selectedWord = sessionStorage.getItem("selectedWord")
  let modifiedDashesWord = sessionStorage.getItem("dashesWord").toString()
  let splittedSelectedWord = JSON.stringify(selectedWord.split(""))
  if(splittedSelectedWord == modifiedDashesWord) {
    winMatch()
  } else {
    console.log(`esto no está funcionando`)
    console.log(typeof(splittedSelectedWord))
    console.log(splittedSelectedWord)
    console.log(typeof(modifiedDashesWord))
    console.log(modifiedDashesWord)
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

const loseMatch = () => {
  let loosingMessageLine = createTextLine("games-hub", `you ran out of tries D:`)
  printInCommandLine(loosingMessageLine)

  let theWordToBeGuessed = createTextLine("games-hub", `the word was: ${sessionStorage.getItem("selectedWord")}`)
  printInCommandLine(theWordToBeGuessed)
  const inputMain = document.querySelector("#input-main");
  inputMain.removeEventListener("keydown", function addAskForLetterFunction (event) {letterSelection(event);})

  endGameMessage()
}

const winMatch = () => {
  let winMessageLine = createTextLine("games-hub", `you win this round!`)
  printInCommandLine(winMessageLine)

  let wonRounds = Number(localStorage.getItem("hangManRoundsWon"))
  let modifiedWonRounds = wonRounds + 1
  localStorage.setItem("hangManRoundsWon", modifiedWonRounds)

  const inputMain = document.querySelector("#input-main");
  inputMain.removeEventListener("keydown", function addAskForLetterFunction (event) {letterSelection(event);})
  
  
  endGameMessage()
}