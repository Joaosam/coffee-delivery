import { ThemeProvider } from "styled-components";
import { Router } from "../Router";
import { BuyContextProvider } from "./contexts/BuyContext";
import { GlobalStyle } from "./styles/global";
import { themeDefault } from "./styles/themes/default";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { themeDark } from "./styles/themes/dark";
import { useState } from "react";
import { ThemeSwitcherContainer } from "./styles/themes/ThemeSwitcher/styled";
import { ThemeSwitcher } from "./styles/themes/ThemeSwitcher";

export function App() {
  function loadThemeFromStorage() {
    const themeStorage = localStorage.getItem("@Coffee-Delivery:DefaultTheme");
    return themeStorage ? JSON.parse(themeStorage) : true;
  }
  const [theme, setTheme] = useState(loadThemeFromStorage());

  function handleThemeChange() {
    setTheme(!theme);
    localStorage.setItem(
      "@Coffee-Delivery:DefaultTheme",
      JSON.stringify(!theme)
    );
  }
  return (
    <ThemeProvider theme={theme ? themeDefault : themeDark}>
      <GlobalStyle />
      <ThemeSwitcherContainer onClick={handleThemeChange}>
        <ThemeSwitcher iconTheme={theme} />
      </ThemeSwitcherContainer>
      <BuyContextProvider theme={theme} onSetTheme={setTheme}>
        <Router />
      </BuyContextProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}
