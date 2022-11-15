import { useState } from 'react';

import { GENRE_OPTIONS } from '../../constants/constants';

export const GenreDropdown = (): JSX.Element => {
  const [value, setValue] = useState('');

  const handleChange = (event): void => {
    setValue(event.target.value);
  };

  return (
    <>
      <span className="genreDropdown">
        <select onChange={handleChange} value={value}>
          {GENRE_OPTIONS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </span>
      <h1>Genre : {value}</h1>
    </>
  );
};
