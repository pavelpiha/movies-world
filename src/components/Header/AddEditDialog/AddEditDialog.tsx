import { moviesActions } from '../../../redux/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { api } from '../../../services/api';
import { CrossIcon } from '../../common/icons/CrossIcon/CrossIcon';
import MwButton from '../../common/MwButton/MwButton';
import MwInput from '../../common/MwInput/MwInput';

import './AddEditDialog.scss';

export interface AddEditDialogProps {
  isDialogShown: boolean;
  handleCancelClick: Function;
  children?: JSX.Element;
  isCreateMode: boolean;
}
export const AddEditDialog = (props: AddEditDialogProps): JSX.Element => {
  const movieItem = useAppSelector((state) => state.movies.movie);
  const title = props.isCreateMode ? 'Add Movie' : 'Edit Movie';
  const [updateMovie] = api.useUpdateMovieMutation();
  const [createMovie] = api.useCreateMovieMutation();
  const dispatch = useAppDispatch();
  if (!props.isDialogShown) {
    return null;
  }

  const handleInputChange = (event: any): void => {
    const propName = event.target.id;
    let propValue = event.target.value;
    if (propName === 'genres') {
      const temp: string = event.target.value;
      propValue = temp.split(',');
    }
    dispatch(moviesActions.setMovie({ ...movieItem, [propName]: propValue }));
  };

  const onSubmitClick = (): void => {
    if (props.isCreateMode) {
      createMovie(movieItem);
    } else {
      updateMovie(movieItem);
    }
    props.handleCancelClick();
  };

  return (
    <div className="mwOverlay">
      <div className="mwAddEditDialog">
        <MwButton onClickInternal={props.handleCancelClick} className="mwCloseButton">
          <CrossIcon className="mwCloseIcon" />
        </MwButton>
        {props.children}
        <div className="mwFormTitle">{title}</div>
        <div className="mwFormBody">
          <form onSubmit={onSubmitClick}>
            <div className="mwFormRow">
              <MwInput
                id="title"
                className="mwMiddleInput"
                containerStyle=""
                name="title"
                onChange={handleInputChange}
                type="text"
                value={movieItem?.title}
              />
              <MwInput
                id="releaseDate"
                className="mwShortInput"
                containerStyle=""
                name="Release date"
                onChange={handleInputChange}
                type="date"
                value={movieItem?.releaseDate}
              />
            </div>
            <div className="mwFormRow">
              <MwInput
                id="posterPath"
                className="mwMiddleInput"
                containerStyle=""
                name="Movie URL"
                onChange={handleInputChange}
                type="text"
                value={movieItem?.posterPath}
                placeholder="https://"
              />
              <MwInput
                id="voteAverage"
                className="mwShortInput"
                containerStyle=""
                name="Rating"
                onChange={handleInputChange}
                type="string"
                value={movieItem?.voteAverage.toString()}
                placeholder="7.8"
              />
            </div>
            <div className="mwFormRow">
              <MwInput
                id="genres"
                className="mwMiddleInput"
                containerStyle=""
                name="Genre"
                onChange={handleInputChange}
                type="text"
                value={movieItem?.genres.toString()}
              />
              <MwInput
                id="runtime"
                className="mwShortInput"
                containerStyle=""
                name="Runtime"
                onChange={handleInputChange}
                type="text"
                value={movieItem?.runtime.toString()}
                placeholder="minutes"
              />
            </div>
            <div className="mwFormRow">
              <MwInput
                id="overview"
                className="mwLongInput"
                containerStyle=""
                name="Overview"
                onChange={handleInputChange}
                type="textarea"
                value={movieItem?.overview}
                placeholder="movie description"
              />
            </div>
          </form>
        </div>
        <div className="mwFormFooter">
          <MwButton onClickInternal={props.handleCancelClick} className="mwCancelButton" buttonName="Reset" />
          <MwButton type="submit" onClickInternal={onSubmitClick} className="mwSubmitButton" buttonName="Submit" />
        </div>
      </div>
    </div>
  );
};
