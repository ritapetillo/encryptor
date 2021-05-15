import React from "react";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { darkTheme } from "./styles/themes";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
