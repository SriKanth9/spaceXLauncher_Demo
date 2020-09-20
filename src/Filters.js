import React from "react";

import LaunchYear from "./LaunchYears";


class Filters extends React.Component {
  render() {
    const flightData = this.props.rocketFilter;
    let getFlightYear = {};
    flightData.map(
      (rocket, idx) =>
        (getFlightYear[rocket.launch_year] =
          getFlightYear[rocket.launch_year] || 1)
    );

    let flightYear = Object.keys(getFlightYear).map((val) => (
      <LaunchYear key={Math.random() * 2} rocket={val} launchYear= {this.props.launchYear}/>
    ));

    return (
      <div className="spaceFilter">
          <p>Launch Year</p>
        <ul className="flightList">{flightYear}</ul>
      </div>
    );
  }
}

export default Filters;
