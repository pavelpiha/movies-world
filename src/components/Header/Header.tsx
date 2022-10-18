import React from "react";
import { GenreDropdown } from "../GenreDropdown/GenreDropdown";
import SearchContainer from "../SearchContainer/SearchContainer";

export class Header extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { searchedTimes: 0 };
  }

  handleIncrement = () => {
    let searchedTimes = this.state.searchedTimes;
    searchedTimes++;
    this.setState({ searchedTimes });
  };

  render() {
    return (
      <div className="headerContainer">
        <h1>Movie World </h1>
        <SearchContainer
          handleSubmit={this.props.handleSubmit}
          handleIncrement={this.handleIncrement}
        />
        <GenreDropdown />
        <div>{this.state.searchedTimes}</div>
      </div>
    );
  }
}
