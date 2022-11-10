import React, { Dispatch, SetStateAction, useState } from 'react';

export const SortingContext = React.createContext<[string, Dispatch<SetStateAction<string>>] | null>(null);

const SortingContextProvider = (props: any): JSX.Element => {
  const [sortingType, setSortingType] = useState('release date');
  return <SortingContext.Provider value={[sortingType, setSortingType]}>{props.children}</SortingContext.Provider>;
};

export default SortingContextProvider;
