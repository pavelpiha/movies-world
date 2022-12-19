import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { ALL_FILTERS, FILTER_BY, GENRE_FILTER } from '../../../../constants/constants';
import { moviesActions } from '../../../../redux/moviesSlice';
import { useAppDispatch } from '../../../../redux/store';
import { useQuery } from '../../../common/hooks/useQuery';

import './GenreNavigation.scss';

const GenreNavigation = (): JSX.Element => {
  const query = useQuery();
  const genreFilterValue: string = query.get(FILTER_BY);
  const getFilters = (): string[] => {
    let appliedFilters = [];
    if (genreFilterValue?.toLowerCase().split(',')) {
      appliedFilters = genreFilterValue?.toLowerCase().split(',');
    }
    return appliedFilters;
  };

  const [filters, setFilters] = useState(getFilters());
  const location = useLocation();
  const history = useHistory();
  const queryParams = new URLSearchParams(location.search);
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

  function updateFilters(newFilters): void {
    queryParams.delete(FILTER_BY);
    queryParams.append(FILTER_BY, newFilters);
    history.replace({
      search: queryParams.toString(),
    });
    setFilters(newFilters);
  }

  const handleMenuItemClick = (event): void => {
    let newFilters;
    const elementIndex = filters.indexOf(event.target.value);
    if (event.target.value === ALL_FILTERS) {
      newFilters = [];
      dispatch(moviesActions.setFilter(newFilters));
      updateFilters(newFilters);
      return;
    }
    if (elementIndex === -1) {
      newFilters = filters.concat([event.target.value]);
      dispatch(moviesActions.setFilter(newFilters));
      updateFilters(newFilters);
    } else {
      newFilters = filters.filter((filter) => filter !== event.target.value);
      dispatch(moviesActions.setFilter(newFilters));
      updateFilters(newFilters);
    }
  };
  return (
    <div className="mwGenresContainer " onClick={handleMenuItemClick}>
      {getMenuButton()}
    </div>
  );
};

export default GenreNavigation;
