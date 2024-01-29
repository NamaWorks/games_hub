export const cleanCommandLine = () => {
  let commandLine = document.querySelector("#conversation-history-container");
  console.log(commandLine);

  commandLine.innerHTML = "";
};
