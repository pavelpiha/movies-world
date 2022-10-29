import { useState } from 'react';

function SearchContainer({ handleIncrement, handleSubmit }: any): any {
  const [searchEntry, setSearchEntry] = useState('');
  const updateSearchInput = (event: any): void => {
    setSearchEntry(event.target.value);
  };

  function updateSearch(event): void {
    event.preventDefault();
    handleIncrement();
    handleSubmit(searchEntry);
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
