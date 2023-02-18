import { ThemeProvider } from "styled-components";
import { Router } from "../Router";
import { BuyContextProvider } from "./contexts/BuyContext";
import { GlobalStyle } from "./styles/global";
import { themeDefault } from "./styles/themes/default";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyle />
      <BuyContextProvider>
        <Router />
      </BuyContextProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}
