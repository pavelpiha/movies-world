import React, { ReactNode } from 'react';

import { AddEditDialog } from './AddEditDialog/AddEditDialog';
import MwButton from '../common/MwButton/MwButton';
import SearchContainer from '../SearchContainer/SearchContainer';

export interface HeaderState {
  searchedTimes: number;
  isDialogShown: boolean;
}
export class Header extends React.Component<any, HeaderState> {
  title = '+ Add Movie';
  state: HeaderState = {
    searchedTimes: 0,
    isDialogShown: false,
  };
  constructor(props) {
    super(props);
  }

  showModal = (): void => {
    this.setState({ ...this.state, isDialogShown: !this.state.isDialogShown });
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
          onClickInternal={this.showModal}
          className="addEditDialogButton"
          buttonName={this.title.toUpperCase()}
        ></MwButton>
        <AddEditDialog isDialogShown={this.state.isDialogShown} handleCancelClick={this.showModal} />
        <SearchContainer handleSubmit={this.props.handleSubmit} handleIncrement={this.handleIncrement} />
      </header>
    );
  }
}
