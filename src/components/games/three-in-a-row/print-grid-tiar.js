import { printInCommandLine } from "../../single_functions/print-in-commandline";

import { createGridLine } from "./create-grid-line";

export let gridTiar = {
  row01: ["-", "-", "-"],
  row02: ["-", "-", "-"],
  row03: ["-", "-", "-"],
};

export const printGridTiar = () => {
  let gridRow01 = gridTiar.row01;
  let gridRow02 = gridTiar.row02;
  let gridRow03 = gridTiar.row03;
  console.log(gridTiar);
  let grid = createGridLine();
  printInCommandLine(grid);
};
