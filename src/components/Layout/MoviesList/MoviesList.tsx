import { MovieItem } from '../MovieItem/MovieItem';

const MoviesList = ({ data }): JSX.Element => {
  if (data.length) {
    const card = data.map((movie) => <MovieItem movieItem={movie} key={movie.id} />);
    return <div className="mwMoviesList">{card}</div>;
  } else {
    return <div className="mwNoData">There are no movies</div>;
  }
};

export default MoviesList;
