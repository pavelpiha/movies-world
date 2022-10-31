import './MovieItem.scss';

export interface MovieItemProp {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  genres: string[];
  releaseDate: string;
}
export const MovieItem = (props: MovieItemProp): JSX.Element => (
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
