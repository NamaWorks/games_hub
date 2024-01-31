import "./sections.css";

import { app, gameSection, legendSection } from "../../data/constant-variables";
import { data } from "../../data/data";

import { getDate } from "../single_functions/get_date";
import { inputSend, setInputValue } from "../single_functions/input-send";
import { createTextLine } from "../single_functions/create-text-line";
import { printInCommandLine } from "../single_functions/print-in-commandline";

const printSections = () => {
  // add hidden h1 for SEO reasons
  let h1Dom = document.createElement("h1");
  h1Dom.innerHTML = "Nama's Games Hub";
  app.append(h1Dom);
  // Print sections
  let gamesSection = document.createElement("section");
  gamesSection.setAttribute("id", "game-hub");
  gamesSection.classList.add("sections");
  app.append(gamesSection);

  let legendSection = document.createElement("section");
  legendSection.setAttribute("id", "legend");
  legendSection.classList.add("sections");
  app.append(legendSection);

  // add section tabs
  let allSections = document.querySelectorAll(".sections");
  allSections.forEach((section) => {
    let sectionName = section.getAttribute("id");
    // Create tab Div
    let sectionTab = document.createElement("div");
    sectionTab.classList.add("section-tab");
    sectionTab.setAttribute("id", sectionName + "-tab");
    section.append(sectionTab);

    // Create tab content
    let currentDate = document.createElement("p");
    currentDate.classList.add("section-date");
    currentDate.innerHTML = getDate();
    sectionTab.append(currentDate);

    let tabContenth2 = document.createElement("h2");
    tabContenth2.classList.add("tab-h2");
    tabContenth2.innerHTML = `[${sectionName}]`;
    sectionTab.append(tabContenth2);
  });

  // Create conversation history + input
  let conversationDiv = document.createElement("div");
  conversationDiv.setAttribute("id", "conversation-container");
  gamesSection.append(conversationDiv);
  let conversationHistoryContainer = document.createElement("div");
  conversationHistoryContainer.setAttribute(
    "id",
    "conversation-history-container"
  );
  conversationDiv.append(conversationHistoryContainer);

  // Create legend items
  let legendContentDiv = document.createElement("div");
  legendContentDiv.classList.add("section-content");
  legendSection.append(legendContentDiv);

  let legendContentTitle = document.createElement("div");
  legendContentDiv.setAttribute("id", "legend-content");
  legendContentDiv.append(legendContentTitle);

  // Create commands UL and LIs
  let legendTitleA = document.createElement("p");
  legendTitleA.innerHTML =
    "[" + data.sections.legend.pageName + "]" + " " + "commands";
  legendContentTitle.append(legendTitleA);

  let commandsUl = document.createElement("ul");
  legendContentTitle.append(commandsUl);

  // Commands List
  const commandsObject = data.sections.legend.commands;
  for (const command in commandsObject) {
    let commandDiv = document.createElement("li");
    commandDiv.classList.add("commands-li");
    commandsUl.append(commandDiv);
    let commandLiName = document.createElement("p");
    commandLiName.classList.add("command-name");
    commandLiName.innerHTML = commandsObject[command].commandName;
    let commandLiInput = document.createElement("p");
    commandLiInput.classList.add("command-input");
    commandLiInput.innerHTML = commandsObject[command].commandInput;
    commandDiv.append(commandLiName);
    commandDiv.append(commandLiInput);
  }
};

const printInputSquare = () => {
  let conversationDiv = document.querySelector("#conversation-container");
  let inputDiv = document.createElement("div");
  inputDiv.setAttribute("id", "input-container");
  conversationDiv.append(inputDiv);
  // let inputSquareLabel = document.createElement("label");
  // inputDiv.append(inputSquareLabel);
  let inputSquare = document.createElement("input");
  inputSquare.setAttribute("id", "input-main");
  inputDiv.append(inputSquare);
  inputSquare.addEventListener("keydown", function (event) {
    setInputValue(event);
  });
  inputSquare.addEventListener("keydown", function (event) {
    inputSend(event);
  });
};

const printWelcome = () => {
  let welcomeText = data.texts.welcome.welcome01;
  let welcomeTextLine = createTextLine("games-hub", welcomeText);
  printInCommandLine(welcomeTextLine);

  let welcomeText2 = data.texts.welcome.welcome02;
  let welcomeTextLine2 = createTextLine("games-hub", welcomeText2);
  printInCommandLine(welcomeTextLine2);

  let welcomeText3 = data.texts.welcome.welcome03;
  let welcomeTextLine3 = createTextLine("games-hub", welcomeText3);
  printInCommandLine(welcomeTextLine3);
};

export const printMainLayout = () => {
  printSections();
  printInputSquare();
  printWelcome();
};
