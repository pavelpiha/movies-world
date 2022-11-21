import { useContext } from 'react';

import { RED_COLOR, SORT_OPTIONS } from '../../../../constants/constants';
import { SortingContext } from '../../../../contexts/SortingContext';
import useComponentVisible from '../../../common/hooks/useComponentVisible';
import { ArrowDownIcon } from '../../../common/icons/ArrowDownIcon/ArrowDownIcon';
import MwButton from '../../../common/MwButton/MwButton';

import './MovieSort.scss';

const MovieSort = (): JSX.Element => {
  const [ref, isComponentVisible, setIsComponentVisible] = useComponentVisible(false, false);
  const [sortingType, setSortingType] = useContext(SortingContext);

  const onDropDownClick = (): void => {
    setIsComponentVisible(!isComponentVisible);
  };

  const handleMenuItemClick = (event): void => {
    setSortingType(event.target.value);
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
          <div className="mwDropdownValue">{sortingType}</div>
          <MwButton onClickInternal={onDropDownClick} className="mwArrowDownButton">
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
