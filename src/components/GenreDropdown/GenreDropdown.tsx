import { useField } from 'formik';

import { GENRE_OPTIONS } from '../../constants/constants';
export interface GenreDropdownProps {
  className?: string;
  name: string;
  label: string;
}
export const GenreDropdown = (props: GenreDropdownProps): JSX.Element => {
  const [field, meta] = useField(props);

  return (
    <div className={props.className}>
      <label className="mwInputTitle">{props.label}</label>
      <div className="mwInputContainer">
        <span className="genreDropdown">
          <select multiple={true} {...field} {...props}>
            {GENRE_OPTIONS.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </span>
        {meta.touched && meta.error ? <div className="mwError">{meta.error}</div> : null}
      </div>
    </div>
  );
};
