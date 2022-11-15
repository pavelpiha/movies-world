import React, { Dispatch, SetStateAction, useState } from 'react';

export const MovieDetailsContext = React.createContext<[boolean, Dispatch<SetStateAction<boolean>>] | null>(null);

const MovieDetailsContextProvider = (props: any): JSX.Element => {
  const [isMovieDetailsShown, setIsMovieDetailsShown] = useState(false);
  return (
    <MovieDetailsContext.Provider value={[isMovieDetailsShown, setIsMovieDetailsShown]}>
      {props.children}
    </MovieDetailsContext.Provider>
  );
};

export default MovieDetailsContextProvider;
