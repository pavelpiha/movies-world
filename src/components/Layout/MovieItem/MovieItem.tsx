import './MovieItem.scss';

export interface MovieItemProps {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  genres: string[];
  releaseDate: string;
}
export const MovieItem = (props: MovieItemProps): JSX.Element => (
  <article className="mwMovieItem">
    <div className="mwMovieItemImageBlock">
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
