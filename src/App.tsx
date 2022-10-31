import { useState } from 'react';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Footer from './components/Footer/Footer';
import FooterEmail from './components/Footer/FooterEmail/FooterEmail';
import { Header } from './components/Header/Header';
import Layout from './components/Layout/Layout';
import MoviesList from './components/Layout/MoviesList/MoviesList';
import { DATA_LOADING_ERROR } from './constants/constants';

function App(): any {
  const [searchEntry, setSearchEntry] = useState('');
  const handleSubmit = (searchInput: string): void => {
    setSearchEntry(searchInput);
  };

  return (
    <>
      <ErrorBoundary>
        <Header handleSubmit={handleSubmit} />
      </ErrorBoundary>
      <Layout>
        <ErrorBoundary message={DATA_LOADING_ERROR}>
          <MoviesList searchEntry={searchEntry} />
        </ErrorBoundary>
      </Layout>
      <Footer>
        <FooterEmail></FooterEmail>
      </Footer>
    </>
  );
}

export default App;
