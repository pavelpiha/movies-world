import { useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

export type SearchParams = {
  searchValue: string;
};
function SearchContainer(): JSX.Element {
  let { searchValue } = useParams<SearchParams>();
  const [searchEntry, setSearchEntry] = useState(searchValue);
  const updateSearchInput = (event: any): void => {
    setSearchEntry(event?.target?.value);
  };
  const location = useLocation();
  const history = useHistory();
  const queryParams = new URLSearchParams(location.search);

  function updateSearch(event): void {
    event.preventDefault();
    history.replace({
      pathname: `/search/${searchEntry}`,
      search: queryParams.toString(),
    });
  }
  return (
    <form className="searchContainer" onSubmit={updateSearch}>
      <input
        type="text"
        name="search"
        placeholder="type to search..."
        onChange={updateSearchInput}
        value={searchEntry}
        className="searchInput"
      />
      <button type="submit" className="searchButton">
        Search
      </button>
    </form>
  );
}

export default SearchContainer;
