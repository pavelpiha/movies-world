import { useParams } from 'react-router-dom';
import { URLSearchParams } from 'url';

import { FILTER_BY, SORT_BY } from '../../../constants/constants';
import { api } from '../../../services/api';
import { useQuery } from '../../common/hooks/useQuery';
import { SearchParams } from '../../SearchContainer/SearchContainer';
import { MovieItem } from '../MovieItem/MovieItem';

import './MoviesList.scss';

const MoviesList = (): JSX.Element => {
  let { searchValue } = useParams<SearchParams>();

  const query: URLSearchParams = useQuery();
  const genreFilterValue: string = query.get(FILTER_BY);
  const sortBy: string = query.get(SORT_BY);
  const filters = genreFilterValue?.toLowerCase().split(',');
  const searchEntry = searchValue;

  const { data = [] } = api.useGetMoviesQuery({ searchEntry, sortBy, filters });

  if (data.length) {
    const card = data.map((movie) => <MovieItem movieItem={movie} key={movie.id} />);
    return <div className="mwMoviesList">{card}</div>;
  } else {
    return <div className="mwNoData">There are no movies</div>;
  }
};

export default MoviesList;
