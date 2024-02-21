import { createTextLine } from "../../single_functions/create-text-line"
import { data } from "../../../data/data"
import { printInCommandLine } from "../../single_functions/print-in-commandline"

export const welcomeHm = () => {
  let welcomeText = createTextLine("games-hub", data.texts.textsGames.hangMan.welcome.welcome01)
  printInCommandLine(welcomeText)
}
