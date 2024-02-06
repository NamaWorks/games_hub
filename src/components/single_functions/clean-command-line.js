export const cleanCommandLine = () => {
  let commandLine = document.querySelector("#conversation-history-container");
  commandLine.innerHTML = "";
  sessionStorage.clear();
  location.reload(true);
};
