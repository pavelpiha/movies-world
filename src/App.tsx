import React, { useState } from 'react';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Footer from './components/Footer/Footer';
import FooterEmail from './components/Footer/FooterEmail/FooterEmail';
import { Header } from './components/Header/Header';
import Layout from './components/Layout/Layout';
import GenreNavigation from './components/Layout/NavigationLayout/GenreNavigation/GenreNavigation';
import MovieSort from './components/Layout/NavigationLayout/MovieSort/MovieSort';
import NavigationLayout from './components/Layout/NavigationLayout/NavigationLayout';
import { DATA_LOADING_ERROR } from './constants/constants';
import SortingContextProvider from './contexts/SortingContext';

import './App.scss';
import '@fontsource/montserrat';

const MoviesList = React.lazy(() => import('./components/Layout/MoviesList/MoviesList'));

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
          <SortingContextProvider>
            <NavigationLayout>
              <GenreNavigation />
              <MovieSort />
            </NavigationLayout>
            <React.Suspense fallback={<div>Loading...</div>}>
              <MoviesList searchEntry={searchEntry} />
            </React.Suspense>
          </SortingContextProvider>
        </ErrorBoundary>
      </Layout>
      <Footer>
        <FooterEmail />
      </Footer>
    </>
  );
}

export default App;
