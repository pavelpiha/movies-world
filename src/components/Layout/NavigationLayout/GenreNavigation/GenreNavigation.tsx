import { ALL_FILTERS, GENRE_FILTER } from '../../../../constants/constants';
import { moviesActions } from '../../../../redux/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';

import './GenreNavigation.scss';

const GenreNavigation = (): JSX.Element => {
  const filters = useAppSelector((state) => state.movies.filters);
  const dispatch = useAppDispatch();

  const getMenuButton = (): JSX.Element[] =>
    GENRE_FILTER.map((option) => (
      <button
        className={`mwFilterButton ${
          filters.some((filter) => filter === option.value) || (option.id === ALL_FILTERS && !filters.length)
            ? 'mwFilterSelected'
            : ''
        }`}
        key={option.id}
        value={option.id}
      >
        {option.id}
      </button>
    ));
  const handleMenuItemClick = (event): void => {
    const elementIndex = filters.indexOf(event.target.value);
    if (event.target.value === ALL_FILTERS) {
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
      {getMenuButton()}
    </div>
  );
};

export default GenreNavigation;
