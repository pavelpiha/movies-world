import { useState } from 'react';
import PropTypes from 'prop-types';
function SearchContainer({ handleIncrement, handleSubmit }: any): JSX.Element {
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

SearchContainer.propTypes = {
  handleIncrement: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchContainer;
