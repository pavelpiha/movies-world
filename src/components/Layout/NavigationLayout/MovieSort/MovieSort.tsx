import { useState } from 'react';
import { useRouter } from 'next/router';

import { RED_COLOR, SORT_OPTIONS } from '../../../../constants/constants';
import { moviesActions } from '../../../../redux/moviesSlice';
import { useAppDispatch, wrapper } from '../../../../redux/store';
import { api } from '../../../../services/api';
import useComponentVisible from '../../../common/hooks/useComponentVisible';
import { ArrowDownIcon } from '../../../common/icons/ArrowDownIcon/ArrowDownIcon';
import MwButton from '../../../common/MwButton/MwButton';

const MovieSort = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { query } = router;
  const { sortBy } = query;
  const [ref, isComponentVisible, setIsComponentVisible] = useComponentVisible(false, false);
  const [sortByParameter, setSortByParameter] = useState(sortBy);
  const onDropDownClick = (): void => {
    setIsComponentVisible(!isComponentVisible);
  };

  const handleMenuItemClick = (event): void => {
    setSortByParameter(event.target.value);
    router.replace({
      query: { ...query, sortBy: event.target.value },
    });
    setIsComponentVisible(!isComponentVisible);
    dispatch(moviesActions.setSorting(event.target.value));
  };

  const getMenuOptions = (): JSX.Element => {
    const menuOptions = SORT_OPTIONS.map((option) => (
      <option value={option.id} className="mwDropdownOption" key={option.id}>
        {option.name}
      </option>
    ));
    return <div className="mwDropdownContainer">{menuOptions}</div>;
  };

  return (
    <div className="mwMovieSortContainer">
      <div>{'sort by'}</div>
      <div ref={ref} className="mwDropdown">
        <div className="mwDropdownInput">
          <div className="mwDropdownValue">{sortByParameter}</div>
          <MwButton onClick={onDropDownClick} className="mwArrowDownButton">
            <ArrowDownIcon className="mwArrowDownIcon" fill={RED_COLOR} />
          </MwButton>
        </div>
        {isComponentVisible && SORT_OPTIONS ? (
          <div className="mwDropdownList" onClick={handleMenuItemClick}>
            {getMenuOptions()}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MovieSort;

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(api.endpoints.getMovies.initiate({ sortBy: '' }));
  await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));
  return {
    props: {},
  };
});
