export const data = {
  sections: {
    gamesHub: {
      pageName: "games hub",
    },
    legend: {
      pageName: "legend",
      commands: {
        showScores: {
          commandName: "scores",
          commandInput: "-sc",
        },
        resetScores: {
          commandName: "reset scores",
          commandInput: "-rst",
        },
        changeGameA: {
          commandName: "change game - three in a row",
          commandInput: "-cg-tir",
        },
        changeGameB: {
          commandName: "change game - rock, paper, scissors",
          commandInput: "-cg-rps",
        },
        changeGameC: {
          commandName: "change game - writing game",
          commandInput: "-cg-wg",
        },
        cleanCommandLine: {
          commandName: "clean command line",
          commandInput: "-cls",
        },
      },
    },
  },
  texts: {
    welcome: {
      welcome01: "hi! so good to have you here!",
      welcome02: "would you like to play a game?",
      welcome03: "we have 3 different games (see them in the legend)",
    },
    textsGames: {
      rockPaperScissors: {
        welcome: {
          welcome01: "we are going to play [rock, paper, scissors]",
        },
        rules: {
          rules01:
            "you have to choose one of the three options: rock, paper, and scissors",
          rules02: "scissors wins against paper, but loses against rock",
          rules03: "paper wins against rock, but loses against scissors",
          rules04: "rock wins against scissors, but loses against paper",
        },
        inGameTexts: {
          inGameText01: "choose an option: rock, paper or scissors",
          inGameText02: "you win this round!",
          inGameText03: "you lose this round!",
          inGameText04: "draw!",
        },
      },
    },
  },
};
