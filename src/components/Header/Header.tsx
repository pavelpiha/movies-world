import React, { ReactNode } from 'react';
import SearchContainer from '../SearchContainer/SearchContainer';

export class Header extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = { searchedTimes: 0 };
  }

  handleIncrement = (): void => {
    let searchedTimes = this.state.searchedTimes;
    searchedTimes++;
    this.setState({ searchedTimes });
  };

  render(): ReactNode {
    return (
      <header className="headerContainer">
        <h1>Movie World </h1>
        <SearchContainer handleSubmit={this.props.handleSubmit} handleIncrement={this.handleIncrement} />
      </header>
    );
  }
}
