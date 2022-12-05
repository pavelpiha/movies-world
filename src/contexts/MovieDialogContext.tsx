import React, { Dispatch, SetStateAction, useState } from 'react';

export const MovieDialogContext = React.createContext<[boolean, Dispatch<SetStateAction<boolean>>] | null>(null);

const MovieDialogContextProvider = (props: any): JSX.Element => {
  const [isMovieDialogShown, setIsMovieDialogShown] = useState(false);
  return (
    <MovieDialogContext.Provider value={[isMovieDialogShown, setIsMovieDialogShown]}>
      {props.children}
    </MovieDialogContext.Provider>
  );
};

export default MovieDialogContextProvider;
