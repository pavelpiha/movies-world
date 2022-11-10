import React, { ReactNode } from 'react';

import { AddEditDialog } from './AddEditDialog/AddEditDialog';
import MwButton from '../common/MwButton/MwButton';
import SearchContainer from '../SearchContainer/SearchContainer';

export interface HeaderState {
  searchedTimes: number;
  isDialogShowed: boolean;
}
export class Header extends React.Component<any, HeaderState> {
  title = '+ Add Movie';
  state: HeaderState = {
    searchedTimes: 0,
    isDialogShowed: false,
  };
  constructor(props) {
    super(props);
  }

  showModal = (): void => {
    this.setState({ ...this.state, isDialogShowed: !this.state.isDialogShowed });
  };

  handleIncrement = (): void => {
    let searchedTimes = this.state.searchedTimes;
    searchedTimes++;
    this.setState({ ...this.state, searchedTimes });
  };

  render(): ReactNode {
    return (
      <header className="headerContainer">
        <h1>Movie World </h1>
        <MwButton
          handleClick={this.showModal}
          buttonClassName="addEditDialogButton"
          buttonName={this.title.toUpperCase()}
        ></MwButton>
        <AddEditDialog isDialogShowed={this.state.isDialogShowed} handleCancelClick={this.showModal} />
        <SearchContainer handleSubmit={this.props.handleSubmit} handleIncrement={this.handleIncrement} />
      </header>
    );
  }
}
