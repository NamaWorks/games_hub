import { getDate } from "./get_date";

export let createTextLine = (user, message) => {
  let date = getDate();
  let inputMessage = message;
  let messageLine = `<p class="text-line"> ${date} [${user}]: <span class="${user}">${inputMessage}</span>`;
  return messageLine;
};
