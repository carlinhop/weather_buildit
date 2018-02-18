import React from "react";
import { Component } from "react";
import DayCard from "./DayCard";

class DaysList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="DaysList">
        <DayCard />
      </div>
    );
  }
}

export default DaysList;
