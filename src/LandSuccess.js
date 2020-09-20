import React from "react";

class LandSuccess extends React.Component {
constructor(props){
    super(props);
    this.landSuccess = this.landSuccess.bind(this);
}
  landSuccess(e) {
    e.preventDefault();
    this.props.land(e.target.value);
  }
  render() {
    return (
      < div className="landSuccess">
        <p>Land Success</p>
        <button value="true" onClick={this.landSuccess} name="landSuccess">
          True
        </button>
        <button value="false" onClick={this.landSuccess} name="landSuccess">
          False
        </button>
      </div>
    );
  }
}

export default LandSuccess;
