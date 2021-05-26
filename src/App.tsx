import React from "react";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { darkTheme, lightTheme } from "./styles/themes";
import { Footer } from "./styles/uiKit";
import { useSelector } from "react-redux";
import { RootStore } from "./store";
import { Theme } from "./interfaces/states";

function App() {
  const { theme } = useSelector((state: RootStore) => state.theme);
  return (
    <ThemeProvider theme={theme === Theme.dark ? darkTheme : lightTheme}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
        <Footer>
          The whole is never the sum of the parts - it is greater or lesser,
          depending on how wel the individuals work together
        </Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
