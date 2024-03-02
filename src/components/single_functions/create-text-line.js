import { getDate } from "./get_date";

export let createTextLine = (user, message) => {
  let date = getDate();
  let inputMessage = message;
  let messageLine = `<p class="text-line"> <span class="date">${date}</span> <span class="user-name-${user}">[${user}]</span>: <span class="${user}-input">${inputMessage}</span>`;
  return messageLine;
};
