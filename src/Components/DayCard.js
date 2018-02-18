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
    return (
      <div>
        <Card className="day-card">
          <CardHeader
            title={new Date(
              this.props.threeHourlyForecast.dt * 1000
            ).toString()}
            subtitle={
              "Description: " +
              this.props.threeHourlyForecast.weather[0].description +
              " | Temperature " +
              this.props.threeHourlyForecast.main.temp +
              " | Pressure " +
              this.props.threeHourlyForecast.main.temp
            }
          />
          <CardMedia>
            <img
              src={
                "http://openweathermap.org/img/w/" +
                this.props.threeHourlyForecast.weather[0].icon +
                ".png"
              }
            />
          </CardMedia>
        </Card>
      </div>
    );
  }
}
export default DayCard;
