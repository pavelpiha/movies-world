import { useAppSelector } from '../../../redux/store';
import { api } from '../../../services/api';
import { MovieItem } from '../MovieItem/MovieItem';

import './MoviesList.scss';

interface MoviesListProps {
  searchEntry: string;
}
const MoviesList = (_props: MoviesListProps): JSX.Element => {
  const sortBy = useAppSelector((state) => state.movies.sortBy);
  const filters = useAppSelector((state) => state.movies.filters);
  const { data = [] } = api.useGetMoviesQuery({ sortBy, filters });

  if (data.length) {
    const card = data.map((movie) => <MovieItem movieItem={movie} key={movie.id} />);
    return <div className="mwMoviesList">{card}</div>;
  } else {
    return <div>There are no movies</div>;
  }
};

export default MoviesList;
