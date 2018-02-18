import React from "react";
import { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";

class DayCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Card className="day-card">
          <CardHeader
            title={new Date(this.props.threeHourlyForecast.dt).toString()}
            subtitle={
              "Temperature " +
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
