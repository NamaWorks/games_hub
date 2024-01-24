import "./sections.css";

import { app, gameSection, legendSection } from "../../data/constant-variables";

import { getDate } from "../single_functions/get_date";

const printSections = () => {
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
    let tabContent = document.createElement("div");
    tabContent.classList.add("tab-content");
    sectionTab.append(tabContent);

    let currentDate = document.createElement("p");
    currentDate.classList.add("section-date");
    currentDate.innerHTML = getDate();
    sectionTab.append(currentDate);

    let tabContentP = document.createElement("p");
    tabContentP.classList.add("tab-p");
    tabContentP.innerHTML = `[${sectionName}]`;
    tabContent.append(tabContentP);
  });
};

export const printMainLayout = () => {
  printSections();
};
