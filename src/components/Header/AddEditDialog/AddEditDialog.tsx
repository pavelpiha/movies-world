import { ChangeEvent } from 'react';

import { CrossIcon } from '../../common/icons/CrossIcon/CrossIcon';
import MwButton from '../../common/MwButton/MwButton';
import MwInput from '../../common/MwInput/MwInput';
import { MovieItemProps } from '../../Layout/MovieItem/MovieItem';

import './AddEditDialog.scss';

export interface AddEditDialogProps {
  isDialogShowed: boolean;
  handleCancelClick: Function;
  movieItem?: MovieItemProps;
  children?: JSX.Element;
}
export const AddEditDialog = (props: AddEditDialogProps): JSX.Element => {
  if (!props.isDialogShowed) {
    return null;
  }
  const movieObject: MovieItemProps = {
    id: 0,
    title: '',
    posterPath: '',
    overview: '',
    genres: [],
    releaseDate: '',
  };
  const title = props.movieItem ? 'Edit Movie' : 'Add Movie';
  const onTitleChange = (event: any): void => {
    console.log('event', event);
    console.log('event.target.value', event.target.value);
    movieObject.title = event.target.value;
  };
  const onRuntimeChange = (_event: ChangeEvent<Element>): void => {};

  const onSubmitClick = (): void => {};

  return (
    <div className="mwOverlay">
      <div className="mwAddEditDialog">
        <MwButton handleClick={props.handleCancelClick} buttonClassName="mwCloseButton">
          <CrossIcon className="mwCloseIcon" />
        </MwButton>
        {props.children}
        <div className="mwFormTitle">{title}</div>
        <div className="mwFormBody">
          <div className="mwFormRow">
            <MwInput
              className="mwMiddleInput"
              containerStyle=""
              name="title"
              onChange={onTitleChange}
              type="text"
              value=""
            />
            <MwInput
              className="mwShortInput"
              containerStyle=""
              name="Release date"
              onChange={onTitleChange}
              type="date"
              value=""
            />
          </div>
          <div className="mwFormRow">
            <MwInput
              className="mwMiddleInput"
              containerStyle=""
              name="Movie URL"
              onChange={onTitleChange}
              type="text"
              value=""
              placeholder="https://"
            />
            <MwInput
              className="mwShortInput"
              containerStyle=""
              name="Rating"
              onChange={onTitleChange}
              type="text"
              value=""
              placeholder="7.8"
            />
          </div>
          <div className="mwFormRow">
            <MwInput
              className="mwMiddleInput"
              containerStyle=""
              name="Genre"
              onChange={onTitleChange}
              type="text"
              value=""
            />
            <MwInput
              className="mwShortInput"
              containerStyle=""
              name="Runtime"
              onChange={onRuntimeChange}
              type="text"
              value=""
              placeholder="minutes"
            />
          </div>
          <div className="mwFormRow">
            <MwInput
              className="mwLongInput"
              containerStyle=""
              name="Overview"
              onChange={onRuntimeChange}
              type="textarea"
              value=""
              placeholder="movie description"
            />
          </div>
        </div>
        <div className="mwFormFooter">
          <MwButton handleClick={props.handleCancelClick} buttonClassName="mwCancelButton" buttonName="Reset" />
          <MwButton handleClick={onSubmitClick} buttonClassName="mwSubmitButton" buttonName="Submit" />
        </div>
      </div>
    </div>
  );
};
