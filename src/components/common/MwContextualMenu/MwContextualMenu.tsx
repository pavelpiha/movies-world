import { useState } from 'react';

import MwButton from '../../common/MwButton/MwButton';
import { MovieItemProps } from '../../Layout/MovieItem/MovieItem';
import useComponentVisible from '../hooks/useComponentVisible';
import { MenuDotsIcon } from '../icons/MenuDotsIcon/MenuDotsIcon';
import MwSimpleModal from '../MwSimpleModal/MwSimpleModal';

import './MwContextualMenu.scss';

export interface MwContextualMenuProps {
  movieItem?: MovieItemProps;
  children?: JSX.Element;
}
export const MwContextualMenu = (props: MwContextualMenuProps): JSX.Element => {
  const [isRemoveDialogVisible, setIsRemoveDialogVisible] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  const showModal = (): void => {
    setIsComponentVisible(true);
  };

  const options = [
    { id: 'edit', name: 'Edit' },
    { id: 'remove', name: 'Remove' },
  ];

  const removeDialog = (
    <MwSimpleModal handleCloseDialog={setIsRemoveDialogVisible} message="Are you sure you want to delete this movie?" />
  );

  const onRemoveClick = (): void => {
    setIsRemoveDialogVisible(true);
  };

  const onEditClick = (): void => {
    console.log('', props.movieItem);
  };

  const handleMenuItemClick = (event): void => {
    const menuOption = event.target.value;
    menuOption === 'edit' ? onEditClick() : undefined;
    menuOption === 'remove' ? onRemoveClick() : undefined;
  };

  const getMenuOptions = (): JSX.Element => {
    const menuOptions = options.map((option) => (
      <option value={option.id} className="mwContextMenuOption" key={option.id}>
        {option.name}
      </option>
    ));
    return <div className="mwContextMenuContainer">{menuOptions}</div>;
  };
  return (
    <>
      <MwButton handleClick={showModal} buttonClassName="mwContextualMenuButton">
        <MenuDotsIcon className="mwMenuDotsIcon" />
      </MwButton>
      {props.children}
      {isComponentVisible && options ? (
        <div ref={ref} className="mwContextualMenu" onClick={handleMenuItemClick}>
          {getMenuOptions()}
        </div>
      ) : null}
      {isRemoveDialogVisible ? removeDialog : null}
    </>
  );
};
