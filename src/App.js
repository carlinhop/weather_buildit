import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import TextField from "material-ui/TextField";
import "./App.css";
import Bar from "./Components/Bar";
import DaysList from "./Components/DaysList";
import { getForecastData } from "./Actions/ActionCreators";
import { store } from "./index";
import { connect } from "react-redux";

class App extends Component {
  componentWillMount() {
    store.dispatch(getForecastData());
    store.subscribe(() => {
      let state = store.getState();
      this.setState({ forecast: state.forecast });
    });
  }
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
