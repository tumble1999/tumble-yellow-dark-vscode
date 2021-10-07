const fs = require("fs").promises,
  getTheme = require("./theme"),
  getClassicTheme = require("./classic/theme"),
  getTumbleTheme = require("./tumbleTheme"),

  /*lightDefaultTheme = getTheme({
    theme: "light",
    name: "GitHub Light Default",
  }),

  darkDefaultTheme = getTheme({
    theme: "dark",
    name: "GitHub Dark Default",
  }),

  darkDimmedTheme = getTheme({
    theme: "dimmed",
    name: "GitHub Dark Dimmed"
  }),

  darkHighContrastTheme = getTheme({
    theme: "hc",
    name: "GitHub Dark High Contrast"
  }),

  // Classic

  lightTheme = getClassicTheme({
    style: "light",
    name: "GitHub Light",
  }),

  darkTheme = getClassicTheme({
    style: "dark",
    name: "GitHub Dark",
  }),*/

  //Custom
  darkTumbleTheme = getTumbleTheme({
    theme: "dark",
    name: "Tumble Yellow Dark",
  });

// Write themes

fs.mkdir("./themes", { recursive: true })
  .then(() => Promise.all([
    /*fs.writeFile("./themes/light-default.json", JSON.stringify(lightDefaultTheme, null, 2)),
    fs.writeFile("./themes/dark-default.json", JSON.stringify(darkDefaultTheme, null, 2)),
    fs.writeFile("./themes/dark-dimmed.json", JSON.stringify(darkDimmedTheme, null, 2)),
    fs.writeFile("./themes/dark-high-contrast.json", JSON.stringify(darkHighContrastTheme, null, 2)),
    fs.writeFile("./themes/light.json", JSON.stringify(lightTheme, null, 2)),
    fs.writeFile("./themes/dark.json", JSON.stringify(darkTheme, null, 2)),*/
    fs.writeFile("./themes/tumble-yellow-dark.json", JSON.stringify(darkTumbleTheme, null, 2)),
  ]))
  .catch(() => process.exit(1));
