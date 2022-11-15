import { useContext, useState } from 'react';

import { AddEditDialog } from './AddEditDialog/AddEditDialog';
import { MovieDetailsContext } from '../../contexts/MovieDetailsContext';
import MwButton from '../common/MwButton/MwButton';
import MovieItemDetails from '../Layout/MovieItemDetails/MovieItemDetails';
import SearchContainer from '../SearchContainer/SearchContainer';

export interface HeaderState {
  searchedTimes: number;
  isDialogShown: boolean;
}

const Header = (props: any): JSX.Element => {
  const [isMovieDetailsShown, setIsMovieDetailsShown] = useContext(MovieDetailsContext);
  const [searchedTimes, setSearchedTimes] = useState(0);
  const title = '+ Add Movie';

  const showModal = (): void => {
    setIsMovieDetailsShown(!isMovieDetailsShown);
  };

  const handleIncrement = (): void => {
    let incrementedSearchedTimes = searchedTimes;
    incrementedSearchedTimes++;
    setSearchedTimes(incrementedSearchedTimes);
  };

  return (
    <header className="headerContainer">
      {!isMovieDetailsShown ? (
        <>
          <h1>Movie World </h1>
          <MwButton onClickInternal={showModal} className="addEditDialogButton" buttonName={title}></MwButton>
          <SearchContainer handleSubmit={props.handleSubmit} handleIncrement={handleIncrement} />
          <AddEditDialog isDialogShown={isMovieDetailsShown} handleCancelClick={showModal} />
        </>
      ) : (
        <MovieItemDetails />
      )}
    </header>
  );
};

export default Header;
