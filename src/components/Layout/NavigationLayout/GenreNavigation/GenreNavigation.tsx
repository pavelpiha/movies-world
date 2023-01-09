import { useState } from 'react';
import { useRouter } from 'next/router';

import { ALL_FILTERS, FILTER_BY, GENRE_FILTER } from '../../../../constants/constants';
import { moviesActions } from '../../../../redux/moviesSlice';
import { useAppDispatch } from '../../../../redux/store';
import { useQuery } from '../../../common/hooks/useQuery';

const GenreNavigation = (): JSX.Element => {
  const query = useQuery();
  const genreFilterValue: string = query.get(FILTER_BY);
  const [filters, setFilters] = useState(genreFilterValue?.toLowerCase().split(',') || []);
  const router = useRouter();
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
    query.set(FILTER_BY, newFilters);
    if (newFilters) {
      router.replace({
        query: { ...query, filter: newFilters },
      });
    } else {
      query.delete(FILTER_BY);
      router.replace({
        query: { ...query },
      });
    }

    setFilters(newFilters);
  }

  const handleMenuItemClick = (event): void => {
    let newFilters;
    const elementIndex = filters.indexOf(event.target.value);
    if (event.target.value === ALL_FILTERS) {
      newFilters = [];
    } else if (elementIndex === -1) {
      newFilters = filters.concat([event.target.value]);
    } else {
      newFilters = filters.filter((filter) => filter !== event.target.value);
    }
    dispatch(moviesActions.setFilter(newFilters));
    updateFilters(newFilters);
  };
  return (
    <div className="mwGenresContainer " onClick={handleMenuItemClick}>
      {getMenuButton()}
    </div>
  );
};

export default GenreNavigation;
