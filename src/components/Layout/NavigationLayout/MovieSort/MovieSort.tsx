import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { RED_COLOR, SORT_BY, SORT_OPTIONS } from '../../../../constants/constants';
import { moviesActions } from '../../../../redux/moviesSlice';
import { useAppDispatch } from '../../../../redux/store';
import useComponentVisible from '../../../common/hooks/useComponentVisible';
import { useQuery } from '../../../common/hooks/useQuery';
import { ArrowDownIcon } from '../../../common/icons/ArrowDownIcon/ArrowDownIcon';
import MwButton from '../../../common/MwButton/MwButton';

import './MovieSort.scss';

const MovieSort = (): JSX.Element => {
  const query = useQuery();
  const sortByValue = query.get(SORT_BY);
  const [ref, isComponentVisible, setIsComponentVisible] = useComponentVisible(false, false);
  const [sortBy, setSortBy] = useState(sortByValue);
  const history = useHistory();
  const dispatch = useAppDispatch();
  const onDropDownClick = (): void => {
    setIsComponentVisible(!isComponentVisible);
  };

  const handleMenuItemClick = (event): void => {
    query.delete(SORT_BY);
    query.append(SORT_BY, event.target.value);
    history.replace({
      search: query.toString(),
    });
    setSortBy(event.target.value);
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
          <div className="mwDropdownValue">{sortBy}</div>
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
