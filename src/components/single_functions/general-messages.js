import { createTextLine } from "./create-text-line"
import { printInCommandLine } from "./print-in-commandline"

export const endGameMessage = () => {
  let endMsgToPrint = createTextLine("games-hub", `write [-cls] to restart the command line and play other games`)
  printInCommandLine(endMsgToPrint)
}