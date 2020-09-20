import React from 'react'

class LaunchSuccess extends React.Component{
    constructor(props){
        super(props);
        this.launchSuccess = this.launchSuccess.bind(this);
    }

    launchSuccess(e){
        e.preventDefault();
        this.props.launch(e.target.value)
    }
    render(){
        return (
            <div className="launchSuccess">
                <p>Launch Success</p>
                <button value="true" onClick={this.launchSuccess} name="launchSuccess">True</button>
                <button value="false" onClick={this.launchSuccess} name="launchSuccess">False</button>
            </div>
        )
    }
}

export default LaunchSuccess;