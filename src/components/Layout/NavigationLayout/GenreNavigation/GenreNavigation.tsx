import { GENRE_FILTER } from '../../../../constants/constants';
import { moviesActions } from '../../../../redux/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';

import './GenreNavigation.scss';

const GenreNavigation = (): JSX.Element => {
  const filters = useAppSelector((state) => state.movies.filters);
  const dispatch = useAppDispatch();
  const allFilters = GENRE_FILTER[0].id;

  let genres = [];

  const initMenuOptions = (): JSX.Element => {
    GENRE_FILTER.forEach((option) => {
      genres.push(
        <button
          className={`mwFilterButton ${
            filters.some((filter) => filter === option.value) || (option.id === allFilters && !filters.length)
              ? 'mwFilterSelected'
              : ''
          }`}
          key={option.id}
          value={option.id}
        >
          {option.id}
        </button>
      );
    });
    return <>{genres}</>;
  };
  const handleMenuItemClick = (event): void => {
    const elementIndex = filters.indexOf(event.target.value);
    if (event.target.value === allFilters) {
      dispatch(moviesActions.setFilter([]));
      return;
    }
    if (elementIndex === -1) {
      dispatch(moviesActions.setFilter(filters.concat([event.target.value])));
    } else {
      dispatch(moviesActions.setFilter(filters.filter((filter) => filter !== event.target.value)));
    }
  };
  return (
    <div className="mwGenresContainer " onClick={handleMenuItemClick}>
      {initMenuOptions()}
    </div>
  );
};

export default GenreNavigation;
