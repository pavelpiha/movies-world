import React, { Dispatch, SetStateAction, useState } from 'react';

import { MovieItemProps } from '../components/Layout/MovieItem/MovieItem';

export const MovieItemContext = React.createContext<[MovieItemProps, Dispatch<SetStateAction<MovieItemProps>>] | null>(
  null
);

const MovieItemContextProvider = (props: any): JSX.Element => {
  const [movieItem, setMovieItem] = useState(null);
  return <MovieItemContext.Provider value={[movieItem, setMovieItem]}>{props.children}</MovieItemContext.Provider>;
};

export default MovieItemContextProvider;
