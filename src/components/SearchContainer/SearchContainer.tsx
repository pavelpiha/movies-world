import { useState } from 'react';
import { useRouter } from 'next/router';

export type SearchParams = {
  searchValue: string;
};
function SearchContainer(): JSX.Element {
  const router = useRouter();
  const { query } = router;
  const { searchString } = query;
  const [searchEntry, setSearchEntry] = useState(searchString);
  const updateSearchInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchEntry(event?.target?.value);
  };
  function updateSearch(event): void {
    event.preventDefault();
    router.replace({
      pathname: '/search/[searchString]',
      query: { ...query, searchString: searchEntry },
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
