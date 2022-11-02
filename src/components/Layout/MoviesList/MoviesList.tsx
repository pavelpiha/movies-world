import { MovieItem, MovieItemProps } from '../MovieItem/MovieItem';
import './MoviesList.scss';
import DATA from '../../../constants/data.json';

interface MoviesListProps {
  searchEntry: string;
}
const MoviesList = (_props: MoviesListProps): JSX.Element => {
  const movies: MovieItemProps[] = DATA.data;

  if (movies) {
    const card = movies.map((movie) => <MovieItem {...movie} key={movie.id} />);
    return <div className="mwMoviesList">{card}</div>;
  } else {
    return <div>There are no movies</div>;
  }
};

export default MoviesList;
