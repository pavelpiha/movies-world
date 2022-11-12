import { ChangeEvent } from 'react';

import { CrossIcon } from '../../common/icons/CrossIcon/CrossIcon';
import MwButton from '../../common/MwButton/MwButton';
import MwInput from '../../common/MwInput/MwInput';
import { MovieItemProps } from '../../Layout/MovieItem/MovieItem';

import './AddEditDialog.scss';

export interface AddEditDialogProps {
  isDialogShown: boolean;
  handleCancelClick: Function;
  movieItem?: MovieItemProps;
  children?: JSX.Element;
}
export const AddEditDialog = (props: AddEditDialogProps): JSX.Element => {
  if (!props.isDialogShown) {
    return null;
  }

  const title = props.movieItem ? 'Edit Movie' : 'Add Movie';
  const onTitleChange = (_event: any): void => {};
  const onRuntimeChange = (_event: ChangeEvent<Element>): void => {};

  const onSubmitClick = (): void => {};

  return (
    <div className="mwOverlay">
      <div className="mwAddEditDialog">
        <MwButton onClickInternal={props.handleCancelClick} className="mwCloseButton">
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
          <MwButton onClickInternal={props.handleCancelClick} className="mwCancelButton" buttonName="Reset" />
          <MwButton onClickInternal={onSubmitClick} className="mwSubmitButton" buttonName="Submit" />
        </div>
      </div>
    </div>
  );
};
