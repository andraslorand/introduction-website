import { useTheme } from "../functions/UseTheme";
import { useState, useEffect } from "react";
import { GlobalStyle } from "../functions/Style";
import styled, { ThemeProvider } from "styled-components";

function Settings() {
  const { theme, themeLoaded,mode } = useTheme;
  const [selectedTheme, setSelectedTheme] = useState(theme);


  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  return <div className="main">
    <p>over here im tying to do another small projekt with changing themes, still under progres</p>
  </div>;
}
function chnage() {
  document.documentElement.style.setProperty("background-color", "#555");
}
export default Settings;
/*return (
    <>
    {
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyle />
      <div className="main">
        <h2>Settings</h2>
        <p>Nothing mutch here, just some themes</p>
        <p>side note: I am bad at design and with colors :(</p>

        <div className="column">
          <button id="bt1">theme 1</button>
          <button>theme 2</button>
        </div>
      </div>
    </ThemeProvider>
    }
    </>
  );*/
