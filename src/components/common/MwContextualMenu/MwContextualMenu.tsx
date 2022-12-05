import { useContext, useState } from 'react';

import { MOVIE_CONTEXT_MENU_OPTIONS } from '../../../constants/constants';
import { MovieDialogContext } from '../../../contexts/MovieDialogContext';
import { MovieItemModel } from '../../../models/movieItem';
import { moviesActions } from '../../../redux/moviesSlice';
import { useAppDispatch } from '../../../redux/store';
import { api } from '../../../services/api';
import MwButton from '../../common/MwButton/MwButton';
import useComponentVisible from '../hooks/useComponentVisible';
import { MenuDotsIcon } from '../icons/MenuDotsIcon/MenuDotsIcon';
import MwSimpleModal from '../MwSimpleModal/MwSimpleModal';

import './MwContextualMenu.scss';

export interface MwContextualMenuProps {
  movieItem: MovieItemModel;
  children?: JSX.Element;
}
export const MwContextualMenu = (props: MwContextualMenuProps): JSX.Element => {
  const [isRemoveDialogVisible, setIsRemoveDialogVisible] = useState(false);
  const [ref, isComponentVisible, setIsComponentVisible] = useComponentVisible(false, false);
  const [isMovieDialogShown, setIsMovieDialogShown] = useContext(MovieDialogContext);
  const [deleteMovie] = api.useDeleteMovieMutation();
  const dispatch = useAppDispatch();

  const showModal = (): void => {
    setIsComponentVisible(true);
  };

  const onSubmitRemove = (): void => {
    deleteMovie(props.movieItem.id);
  };

  const removeDialog = (
    <MwSimpleModal
      title="Remove movie?"
      handleCloseDialog={setIsRemoveDialogVisible}
      handleSubmitDialog={onSubmitRemove}
      message="Are you sure you want to delete this movie?"
    />
  );

  const onRemoveClick = (): void => {
    setIsRemoveDialogVisible(true);
  };

  const onEditClick = (): void => {
    dispatch(moviesActions.setMovie(props.movieItem));
    setIsMovieDialogShown(!isMovieDialogShown);
  };

  const handleMenuItemClick = (event): void => {
    const menuOption = event.target.value;
    menuOption === 'edit' ? onEditClick() : undefined;
    menuOption === 'remove' ? onRemoveClick() : undefined;
  };

  const getMenuOptions = (): JSX.Element => {
    const menuOptions = MOVIE_CONTEXT_MENU_OPTIONS.map((option) => (
      <option value={option.id} className="mwContextMenuOption" key={option.id}>
        {option.name}
      </option>
    ));
    return <div className="mwContextMenuContainer">{menuOptions}</div>;
  };
  return (
    <>
      <MwButton onClickInternal={showModal} className="mwContextualMenuButton">
        <MenuDotsIcon className="mwMenuDotsIcon" />
      </MwButton>
      {props.children}
      {isComponentVisible && MOVIE_CONTEXT_MENU_OPTIONS ? (
        <div ref={ref} className="mwContextualMenu" onClick={handleMenuItemClick}>
          {getMenuOptions()}
        </div>
      ) : null}
      {isRemoveDialogVisible ? removeDialog : null}
    </>
  );
};
