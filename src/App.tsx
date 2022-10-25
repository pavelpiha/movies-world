import { SetStateAction, useState } from 'react';
import './App.scss';
import { Header } from './components/Header/Header';

function App(): any {
  const [searchEntry, setSearchEntry] = useState('');
  const handleSubmit = (searchInput: SetStateAction<string>): void => {
    setSearchEntry(searchInput);
  };

  return (
    <div className="">
      <Header handleSubmit={handleSubmit} />
      <div className="mainBlock">{searchEntry}</div>
    </div>
  );
}

export default App;
