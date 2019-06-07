const white = "#FFFFFF";
const black = "#4D4D4D";
const gray = "#F8F8F9";

const themeLight = {
  background: gray,
  color:black
};

const themeDark = {
  background: black,
  color:white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
