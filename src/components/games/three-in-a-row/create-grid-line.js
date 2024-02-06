import { gridTiar } from "./print-grid-tiar";
import { getDate } from "../../single_functions/get_date";

export const createGridLine = () => {
  let date = getDate();
  let gridRow01 = gridTiar.row01;
  let gridRow02 = gridTiar.row02;
  let gridRow03 = gridTiar.row03;

  let messageLine = `<div class="text-line"><p class="grid"> <span class="date">${date}</span> <span class="user-name">[games-hub]</span>: <span class="games-hub">this is the current grid: <br> ${gridRow01.join(
    "|"
  )} <br> ${gridRow02.join("|")} <br> ${gridRow03.join("|")} </span>`;

  return messageLine;
};
