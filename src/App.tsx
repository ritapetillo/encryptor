import React from "react";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { darkTheme } from "./styles/themes";
import { Footer } from "./styles/uiKit";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
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
