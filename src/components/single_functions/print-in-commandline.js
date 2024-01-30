import { getDate } from "./get_date";
import { inputMain } from "../../data/constant-variables";
import { createTextLine } from "./create-text-line";

export const printInCommandLine = (string) => {
  // let stringToPrint = createTextLine("usuario", string);
  let conversationHistoryContainer = document.querySelector(
    "#conversation-history-container"
  );
  // console.log(conversationHistoryContainer);
  conversationHistoryContainer.innerHTML += `${string}`;
  conversationHistoryContainer.scrollTop =
    conversationHistoryContainer.scrollHeight;
};
