import { useContext } from 'react';

import { MovieDetailsContext } from '../../../contexts/MovieDetailsContext';
import { MovieItemContext } from '../../../contexts/MovieItemContext';
import { MwContextualMenu } from '../../common/MwContextualMenu/MwContextualMenu';

import './MovieItem.scss';

export interface MovieItemProps {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  genres: string[];
  releaseDate: string;
  voteAverage: number;
  runtime: number;
}
export const MovieItem = (props: MovieItemProps): JSX.Element => {
  const [, setMovieItem] = useContext(MovieItemContext);
  const [, setIsMovieDetailsShown] = useContext(MovieDetailsContext);

  const onMovieItemClick = (): void => {
    setMovieItem(props);
    setIsMovieDetailsShown(true);
  };

  return (
    <article onClick={onMovieItemClick} className="mwMovieItem">
      <div className="mwMovieItemImageBlock">
        <MwContextualMenu movieItem={props} />
        <img src={props.posterPath} alt="" />
      </div>
      <div className="mwMovieItemFooter">
        <div>
          <div className="mvMovieItemTitle">{props.title}</div>
          <div className="mvMovieItemGenre">{props.genres.join(', ')}</div>
        </div>
        <div className="mwMovieItemDate">{props.releaseDate}</div>
      </div>
    </article>
  );
};
