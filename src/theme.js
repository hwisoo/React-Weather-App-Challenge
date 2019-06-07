const white = "#FFFFFF";
const black = "#4D4D4D";
const gray = "#F8F8F9";

const themeLight = {
  background: gray,
  body: black,
  color:black
};

const themeDark = {
  background: black,
  body: white,
  color:white
};

const theme = mode => (mode === "dark" ? themeDark : themeLight);

export default theme;
