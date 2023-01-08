import { Form, Formik, FormikProps } from 'formik';
import * as Yup from 'yup';

import { MovieItemModel } from '../../../models/movieItem';
import { moviesActions } from '../../../redux/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { api } from '../../../services/api';
import { CrossIcon } from '../../common/icons/CrossIcon/CrossIcon';
import MwButton from '../../common/MwButton/MwButton';
import MwInput from '../../common/MwInput/MwInput';
import { GenreDropdown } from '../../GenreDropdown/GenreDropdown';

export const validationSchema = Yup.object({
  title: Yup.string().max(30, 'Must be 30 characters or less').required('Required'),
  posterPath: Yup.string().required('Required'),
  overview: Yup.string().required('Required'),
  releaseDate: Yup.date().required('Required'),
  genres: Yup.array().min(1).required('Required'),
  voteAverage: Yup.number().max(10, 'Must be 10 characters or less'),
  runtime: Yup.number().min(1, 'Must be positive integer').max(5, 'Must be 5 characters or less').required('Required'),
});

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

  const onSubmitClick = (movie: MovieItemModel): void => {
    dispatch(moviesActions.setMovie({ id: movieItem.id, ...movie }));
    setTimeout(() => {
      if (props.isCreateMode) {
        createMovie(movieItem);
      } else {
        updateMovie(movieItem);
      }
      props.handleCancelClick();
    }, 0);
  };

  return (
    <div className="mwOverlay">
      <div className="mwAddEditDialog">
        <MwButton onClick={props.handleCancelClick} className="mwCloseButton">
          <CrossIcon className="mwCloseIcon" />
        </MwButton>
        {props.children}

        <div className="mwFormTitle">{title}</div>
        <Formik
          initialValues={{ ...(movieItem ? movieItem : {}) }}
          validationSchema={validationSchema}
          onSubmit={onSubmitClick}
        >
          {(formikProps: FormikProps<any>) => (
            <>
              <Form onSubmit={formikProps.handleSubmit}>
                <div className="mwFormBody">
                  <div className="mwFormRow">
                    <MwInput className="mwMiddleInput" name="title" label="title" type="text" />
                    <MwInput className="mwShortInput" name="releaseDate" label="Release Date" type="date" />
                  </div>
                  <div className="mwFormRow">
                    <MwInput
                      name="posterPath"
                      className="mwMiddleInput"
                      label="Movie URL"
                      type="text"
                      placeholder="https://"
                    />
                    <MwInput
                      name="voteAverage"
                      className="mwShortInput"
                      label="Rating"
                      type="string"
                      placeholder="7.8"
                    />
                  </div>
                  <div className="mwFormRow">
                    <GenreDropdown className="mwMiddleInput" name="genres" label="Genre" />
                    <MwInput
                      name="runtime"
                      className="mwShortInput"
                      label="Runtime"
                      type="text"
                      placeholder="minutes"
                    />
                  </div>
                  <div className="mwFormRow">
                    <MwInput
                      name="overview"
                      className="mwLongInput"
                      label="Overview"
                      type="textarea"
                      placeholder="movie description"
                    />
                  </div>
                </div>
                <div className="mwFormFooter">
                  <MwButton onClick={props.handleCancelClick} className="mwCancelButton" buttonName="Reset" />
                  <MwButton
                    type="submit"
                    onClick={formikProps.handleSubmit}
                    className="mwSubmitButton"
                    buttonName="Submit"
                  />
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};
