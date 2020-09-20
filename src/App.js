import React from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";

import Filters from "./Filters";
import SpaceFlights from "./SpaceFlights";

import LaunchSuccess from "./LaunchSuccess";
import LandSuccess from "./LandSuccess";

import style from './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spacexData: [],
      launchSuccess: null,
      landSuccess: null,
      launchYear: null,
    };
  }
  async getSpacexData() {
    const url = "https://api.spaceXdata.com/v3/launches?limit=100";
    const request = await fetch(url);
    const res = await request.json();
    const flightData = res;
    this.setState({
      spacexData: [...flightData],
    });
  }
  componentDidMount() {
    this.getSpacexData();
  }

  launchSuccess = (e) => {
    let curState = this.state.launchSuccess;
    console.log(curState);
    if (!curState) {
      this.setState({
        launchSuccess: e,
      });
    } else if (curState) {
      if (curState.toString() === e) {
        this.setState({
          launchSuccess: null,
        });
      } else {
        this.setState({
          launchSuccess: "false",
        });
      }
    } else {
      if (curState.toString() === e) {
        this.setState({
          launchSuccess: null,
        });
      } else {
        this.setState({
          launchSuccess: "true",
        });
      }
    }
  };

  landSuccess = (e) => {
    this.setState({
      landSuccess: e,
    });
  };

  launchYear = (e) => {
    let year = e.target.value;
    this.setState({
      launchYear: year,
      launchSuccess: null,
    });
  };

  render() {
    return this.state.spacexData.length > 0 ? (
      <div className="spacexContainer">
        <div className="spacexHeader">
          <h2 className="title">SpaceX Launch Programs</h2>
        </div>
        <div className="spaceXFlighs">
          <div className="fliters">
            <Filters
              rocketFilter={this.state.spacexData}
              land={this.landSuccess}
              launchYear={this.launchYear}
            />
            <LaunchSuccess launch={this.launchSuccess} />
            <LandSuccess land={this.landSuccess} />
          </div>
          <>
          <SpaceFlights
            rocketData={this.state.spacexData}
            launchYear={this.state.launchYear}
            landSuccess={this.state.landSuccess}
            launchSuccess={this.state.launchSuccess}
          />
          </>
        </div>
        <div className="about">
          <h2 className="details">Developed by Srikanth</h2>
        </div>
      </div>
    ) : (
      < div className="initialLoader">
        <Button variant="primary" disabled>
          <Spinner
            as="span"
            animation="grow"
            size="el"
            role="status"
            aria-hidden="true"
            className="spinner"
          />
           <span className="sr-only">Loading...</span>
        </Button>
      </div>
    );
  }
}

export default App;
