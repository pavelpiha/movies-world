import { useContext } from 'react';

import { MovieDetailsContext } from '../../../contexts/MovieDetailsContext';
import { useAppSelector } from '../../../redux/store';
import { SearchIcon } from '../../common/icons/SearchIcon/SearchIcon';
import MwButton from '../../common/MwButton/MwButton';

import './MovieItemDetails.scss';

const MovieItemDetails = (): JSX.Element => {
  const [, setIsMovieDetailsShown] = useContext(MovieDetailsContext);
  const movieItem = useAppSelector((state) => state.movies.movie);

  const onSearchClick = (): void => {
    setIsMovieDetailsShown(false);
  };
  if (!movieItem) {
    return null;
  }
  return (
    <div className="mwMovieItemDetails">
      <div className="mwMovieImage">
        <img src={movieItem.posterPath} alt="" />
      </div>
      <div className="mwMovieDetails">
        <div className="mwMovieTitleBlock">
          <div className="mwMovieTitle">{movieItem.title}</div>
          <span className="mwMovieScore">{movieItem.voteAverage}</span>
        </div>
        <div className="mwMovieGenre">{movieItem.genres.join(', ')}</div>
        <div className="mwMovieYear">
          <div>{movieItem.releaseDate}</div>
          <div>{movieItem.runtime}</div>
        </div>
        <div className="mwMovieOverview">{movieItem.overview}</div>
      </div>
      <div className="mwSearchButtonBlock">
        <MwButton onClickInternal={onSearchClick} className="mwSearchButton">
          <SearchIcon className="mwSearchIcon" />
        </MwButton>
      </div>
    </div>
  );
};

export default MovieItemDetails;
