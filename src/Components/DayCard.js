import React from "react";
import { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardText,
  CardMedia
} from "material-ui/Card";

class DayCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      "max-width": "50px",
      "min-width": "50px"
    };

    return (
      <div className="day-card-container">
        <Card className="day-card">
          <CardMedia style={style}>
            <img
              className="weather-icons"
              src={
                "http://openweathermap.org/img/w/" +
                this.props.threeHourlyForecast.weather[0].icon +
                ".png"
              }
              width="50px"
              height="50px"
            />
          </CardMedia>
          <CardHeader
            title={new Date(
              this.props.threeHourlyForecast.dt * 1000
            ).toString()}
            subtitle={
              "Description: " +
              this.props.threeHourlyForecast.weather[0].description +
              " | Temperature °C " +
              this.props.threeHourlyForecast.main.temp +
              " | Pressure " +
              this.props.threeHourlyForecast.main.temp
            }
          />
        </Card>
      </div>
    );
  }
}
export default DayCard;
