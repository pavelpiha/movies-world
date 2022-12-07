import { useContext, useState } from 'react';

import { AddEditDialog } from './AddEditDialog/AddEditDialog';
import { MovieDetailsContext } from '../../contexts/MovieDetailsContext';
import { MovieDialogContext } from '../../contexts/MovieDialogContext';
import { MovieItemModel } from '../../models/movieItem';
import { moviesActions } from '../../redux/moviesSlice';
import { useAppDispatch } from '../../redux/store';
import MwButton from '../common/MwButton/MwButton';
import MovieItemDetails from '../Layout/MovieItemDetails/MovieItemDetails';
import SearchContainer from '../SearchContainer/SearchContainer';

const Header = (props: any): JSX.Element => {
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [isMovieDetailsShown] = useContext(MovieDetailsContext);
  const [isMovieDialogShown, setIsMovieDialogShown] = useContext(MovieDialogContext);
  const [searchedTimes, setSearchedTimes] = useState(0);
  const dispatch = useAppDispatch();
  const addButtonTitle = '+ Add Movie';

  const showModal = (): void => {
    setIsMovieDialogShown(!isMovieDialogShown);
  };

  const onAddMovieClick = (): void => {
    setIsCreateMode(true);

    dispatch(moviesActions.setMovie(new MovieItemModel()));
    showModal();
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
          <MwButton onClick={onAddMovieClick} className="addEditDialogButton" buttonName={addButtonTitle} />
          <SearchContainer handleSubmit={props.handleSubmit} handleIncrement={handleIncrement} />
          <AddEditDialog isCreateMode={isCreateMode} isDialogShown={isMovieDialogShown} handleCancelClick={showModal} />
        </>
      ) : (
        <MovieItemDetails />
      )}
    </header>
  );
};

export default Header;
