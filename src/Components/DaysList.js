import React from "react";
import { Component } from "react";
import DayCard from "./DayCard";
import { connect } from "react-redux";

class DaysList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let daysList;
    try {
      daysList = this.props.forecast.list.map(forecast => {
        console.log(forecast);
        return <DayCard threeHourlyForecast={forecast} />;
      });
    } catch (error) {
      console.log(error);
    }

    return <div className="DaysList">{daysList ? daysList : <div />}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    forecast: state ? state.forecast : { list: [] }
  };
}

export default connect(mapStateToProps)(DaysList);
