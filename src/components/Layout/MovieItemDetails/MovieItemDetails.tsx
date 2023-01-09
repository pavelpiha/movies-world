import { useContext } from 'react';
import { useRouter } from 'next/router';

import { MOVIE_DETAILS } from '../../../constants/constants';
import { MovieDetailsContext } from '../../../contexts/MovieDetailsContext';
import { useAppSelector } from '../../../redux/store';
import { useQuery } from '../../common/hooks/useQuery';
import { SearchIcon } from '../../common/icons/SearchIcon/SearchIcon';
import MwButton from '../../common/MwButton/MwButton';

const MovieItemDetails = (): JSX.Element => {
  const query: URLSearchParams = useQuery();
  const router = useRouter();
  const [, setIsMovieDetailsShown] = useContext(MovieDetailsContext);
  const movieItem = useAppSelector((state) => state.movies.movie);

  const onSearchClick = (): void => {
    query.delete(MOVIE_DETAILS);
    router.replace({
      query: query.toString(),
    });
    setIsMovieDetailsShown(false);
  };

  if (!movieItem) {
    return;
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
        <MwButton onClick={onSearchClick} className="mwSearchButton">
          <SearchIcon className="mwSearchIcon" />
        </MwButton>
      </div>
    </div>
  );
};

export default MovieItemDetails;
