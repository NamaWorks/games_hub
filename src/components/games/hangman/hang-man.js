import { welcomeHm } from "./game-start-hm"
import { getRandomWord, askForLetter, printDashesWord } from "./gameplay-hm"

export const hangMan = () => {
  welcomeHm()
  getRandomWord()
  printDashesWord()
  askForLetter()
  
}