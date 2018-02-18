import React from "react";
import { Component } from "react";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";

class DayCard extends Component {
  render() {
    return (
      <div>
        <Card className="day-card">
          <CardHeader title="Without Avatar" subtitle="Subtitle" />
        </Card>
      </div>
    );
  }
}
export default DayCard;
