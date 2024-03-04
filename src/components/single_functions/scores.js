import { createTextLine } from "./create-text-line";
import { printInCommandLine } from "./print-in-commandline";


export const showScores = () => {
  let hangmanPlayed = Number(localStorage.getItem("hangManRoundsPlayed"))
  let hangmanWon = Number(localStorage.getItem("hangManRoundsWon"))

  let rpsPlayed = Number(localStorage.getItem("startedMatchesRps"))
  let rpsWon = Number(localStorage.getItem("rpsRoundsWon"))

  let tiarPlayed = Number(localStorage.getItem("tiarRoundsPlayed"))
  let tiarWon = Number(localStorage.getItem("tiarRoundsWon"))

  let rpsScoreText = createTextLine("games-hub", gameScore(rpsPlayed, rpsWon,"rock, paper & scissors"))
  let hangManScoreText = createTextLine("games-hub", gameScore(hangmanPlayed, hangmanWon, "hangman"))
  let tiarScoreText = createTextLine("games-hub", gameScore(tiarPlayed, tiarWon, "three in a row"))

  printInCommandLine(rpsScoreText)
  printInCommandLine(hangManScoreText)
  printInCommandLine(tiarScoreText)
  
}

const gameScore = (numberPlayed, numberWon, game) => {
  return `you played <span class="blue">[${game}]</span> <span class="blue">[${numberPlayed}]</span> times and won <span class="blue">[${numberWon}]</span> times.`
}