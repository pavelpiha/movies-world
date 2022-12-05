import React, { Dispatch, SetStateAction, useState } from 'react';

import { MovieItemModel } from '../models/movieItem';

export const MovieItemContext = React.createContext<[MovieItemModel, Dispatch<SetStateAction<MovieItemModel>>] | null>(
  null
);

const MovieItemContextProvider = (props: any): JSX.Element => {
  const [movieItem, setMovieItem] = useState(null);
  return <MovieItemContext.Provider value={[movieItem, setMovieItem]}>{props.children}</MovieItemContext.Provider>;
};

export default MovieItemContextProvider;
