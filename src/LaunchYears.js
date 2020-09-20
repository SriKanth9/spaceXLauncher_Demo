import React from 'react'

class LaunchYear extends React.Component{
    render(){
        let flight = this.props.rocket? this.props.rocket:null;
        return (
            <>
            <li key={Math.random(flight*2)} style={{listStyleType:"none"}}><button value={flight} onClick={this.props.launchYear}>{flight}</button></li>
            </>
        )
    }
}

export default LaunchYear;