import {
  machineSideRps,
  removeEventListenerFromInputRps,
} from "./gameplay-rps";
import { startNewRoundRps } from "./start-new-round-rps";
import { startRps } from "./start-rps";
import { addEventListenerToInputRps } from "./gameplay-rps";
import { getLastInputValue } from "../../single_functions/input-send";

export const rockPaperScissors = () => {
  startRps();
  startNewRoundRps();
  machineSideRps();
  addEventListenerToInputRps();
};
