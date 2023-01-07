import { useCallback, useContext, useEffect, useState } from 'react';

import { AddEditDialog } from './AddEditDialog/AddEditDialog';
import { MOVIE_DETAILS } from '../../constants/constants';
import { MovieDetailsContext } from '../../contexts/MovieDetailsContext';
import { MovieDialogContext } from '../../contexts/MovieDialogContext';
import { MovieItemModel } from '../../models/movieItem';
import { moviesActions } from '../../redux/moviesSlice';
import { useAppDispatch } from '../../redux/store';
import { api } from '../../services/api';
import { useQuery } from '../common/hooks/useQuery';
import MwButton from '../common/MwButton/MwButton';
import MovieItemDetails from '../Layout/MovieItemDetails/MovieItemDetails';
import SearchContainer from '../SearchContainer/SearchContainer';

import { skipToken } from '@reduxjs/toolkit/query';

const Header = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isMovieDialogShown, setIsMovieDialogShown] = useContext(MovieDialogContext);
  const [isCreateMode, setIsCreateMode] = useState(false);
  const [isMovieDetailsShown] = useContext(MovieDetailsContext);
  const addButtonTitle = '+ Add Movie';
  const [, setIsMovieDetailsShown] = useContext(MovieDetailsContext);
  const query: URLSearchParams = useQuery();
  const movieQueryParameter: string = query.get(MOVIE_DETAILS);

  const showModal = useCallback((): void => {
    setIsMovieDialogShown(!isMovieDialogShown);
  }, [setIsMovieDialogShown, isMovieDialogShown]);

  const onAddMovieClick = useCallback(() => {
    setIsCreateMode(true);

    const newMovieItem: MovieItemModel = {
      id: 0,
      title: '',
      posterPath: '',
      overview: '',
      genres: [],
      releaseDate: '',
      voteAverage: 0,
      runtime: 0,
    };

    dispatch(moviesActions.setMovie(newMovieItem));
    showModal();
  }, [dispatch, showModal]);

  const { data } = api.useGetMovieByIdQuery(movieQueryParameter ? movieQueryParameter : skipToken);

  useEffect(() => {
    if (data) {
      dispatch(moviesActions.setMovie(data));
      setIsMovieDetailsShown(true);
    }
  }, [data, dispatch, setIsMovieDetailsShown]);

  return (
    <header className="headerContainer">
      {!isMovieDetailsShown ? (
        <>
          <h1>Movie World </h1>
          <MwButton onClick={onAddMovieClick} className="addEditDialogButton" buttonName={addButtonTitle} />
          <SearchContainer />
          <AddEditDialog isCreateMode={isCreateMode} isDialogShown={isMovieDialogShown} handleCancelClick={showModal} />
        </>
      ) : (
        <MovieItemDetails />
      )}
    </header>
  );
};

export default Header;
