import React from "react";

class SpaceFlights extends React.Component {
  render() {
    const spaceRockets = this.props.rocketData ? this.props.rocketData : [];
    const lYear = this.props.launchYear;
    const landS = this.props.landSuccess;
    const launchS = this.props.launchSuccess;
    let row = [];
    spaceRockets.forEach((rocket,idx)=>{
            if(filterFlight(rocket,lYear,launchS)){
                row.push(rocket)
            }
        
    })
    console.log(launchS,row);
    let list =
      row.length > 0
        ? row.map((rocket, idx) => (
            <li key={rocket.mission_name}>
              <div className="rocketsList">
                <img
                  src={rocket.links.mission_patch_small}
                  alt={rocket.mission_name}
                />
                <p>
                  <b>{`${rocket.mission_name} #${rocket.flight_number}`}</b>
                </p>
                <p>
                  <b>Launch Year: </b>
                  {rocket.launch_year}
                </p>
                <p>
                  <b>Success Launch: </b>
                  {rocket.launch_success.toString()}
                </p>
                <p>
                  <b>Success Landing: </b>
                  {rocket.launch_success.toString()}
                </p>
              </div>
            </li>
          ))
        : spaceRockets.map((rocket, idx) => (
            <li key={rocket.mission_name}>
              <div className="rocketsList">
                <img
                  src={rocket.links.mission_patch_small}
                  alt={rocket.mission_name}
                />
                <p>
                  <b>{`${rocket.mission_name} #${rocket.flight_number}`}</b>
                </p>
                <p>
                  <b>Launch Year: </b>
                  {rocket.launch_year}
                </p>
                <p>
                  <b>Success Launch: </b>
                  {rocket.launch_success.toString()}
                </p>
                <p>
                  <b>Success Landing: </b>
                  {rocket.launch_success.toString()}
                </p>
              </div>
            </li>
          ));
    return (
      <div className="displayRocket">
        <ul className="displayRocketList">{list}</ul>
      </div>
    );
  }
}

export default SpaceFlights;


function filterFlight(flight,year,lsucc){
    let bool = flight.launch_success.toString();
    if(year && lsucc===null){
        if(flight.launch_year === year){
            return true;
        }
    }else if(flight.launch_year===year && (bool===lsucc)){
        return true;
    }
}