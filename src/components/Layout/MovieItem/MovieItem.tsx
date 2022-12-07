import { useContext } from 'react';

import { MovieDetailsContext } from '../../../contexts/MovieDetailsContext';
import { MovieItemModel } from '../../../models/movieItem';
import { MwContextualMenu } from '../../common/MwContextualMenu/MwContextualMenu';

import './MovieItem.scss';

export interface MovieItemProps {
  movieItem: MovieItemModel;
}
export const MovieItem = (props: MovieItemProps): JSX.Element => {
  const [, setIsMovieDetailsShown] = useContext(MovieDetailsContext);
  const onMovieItemClick = (): void => {
    setIsMovieDetailsShown(true);
  };

  return (
    <div className="mwMovieItem">
      <article onClick={onMovieItemClick}>
        <div className="mwMovieItemImageBlock">
          <img src={props.movieItem.posterPath} alt="" />
        </div>
        <div className="mwMovieItemFooter">
          <div>
            <div className="mvMovieItemTitle">{props.movieItem.title}</div>
            <div className="mvMovieItemGenre">{props.movieItem.genres.join(', ')}</div>
          </div>
          <div className="mwMovieItemDate">{props.movieItem.releaseDate}</div>
        </div>
      </article>
      <MwContextualMenu movieItem={props.movieItem} />
    </div>
  );
};
