import React, { Component } from "react";
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import { getForecastData } from "../Actions/ActionCreators";
import { store } from "../index";

class Bar extends Component {
  constructor(props) {
    super(props);
  }

  getCityValue(city) {
    console.log(city.value);
    this.setState({ city: city.value });
  }

  getCityForecast() {
    store.dispatch(getForecastData(this.state.city));
  }
  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="Weather BuildIt" />
        </ToolbarGroup>

        <ToolbarGroup>
          <TextField
            hintText="City"
            onChange={event => {
              this.getCityValue(event.target);
            }}
          />
          <FlatButton
            label="Search"
            primary={true}
            onClick={() => {
              this.getCityForecast();
            }}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
export default Bar;
