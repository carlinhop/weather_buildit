import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Bar from "./Components/Bar";
import DaysList from "./Components/DaysList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>
            <Route
              exact
              path="/"
              render={props => {
                return (
                  <div className="App">
                    <Bar />
                    <DaysList />
                  </div>
                );
              }}
            />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
