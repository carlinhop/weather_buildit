import React from "react";
import { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";

class DayCard extends Component {
  render() {
    return (
      <div>
        <Card className="day-card">
          <CardHeader
            title="Without Avatar"
            subtitle="Temperature 20C | Pressure 100 mil "
          />
        </Card>
      </div>
    );
  }
}
export default DayCard;
