import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.setSearch = this.setSearch.bind(this);
  }
  setSearch(e){
      this.props.onFilterRocket(e.target.value);
  }
  render() {

    const filterText = this.props.searchVal;
    return (
      <div>
        <input type="text" placeholder="Search rocket.." onChange={this.setSearch} value={filterText} className="search"></input>
      </div>
    );
  }
}

export default Search;


