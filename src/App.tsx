import React, { useState } from 'react';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Footer from './components/Footer/Footer';
import FooterEmail from './components/Footer/FooterEmail/FooterEmail';
import Layout from './components/Layout/Layout';
import GenreNavigation from './components/Layout/NavigationLayout/GenreNavigation/GenreNavigation';
import MovieSort from './components/Layout/NavigationLayout/MovieSort/MovieSort';
import NavigationLayout from './components/Layout/NavigationLayout/NavigationLayout';
import { DATA_LOADING_ERROR } from './constants/constants';
import MovieDetailsContextProvider from './contexts/MovieDetailsContext';
import MovieDialogContextProvider from './contexts/MovieDialogContext';
import MovieItemContextProvider from './contexts/MovieItemContext';

import './App.scss';
import '@fontsource/montserrat';

const MoviesList = React.lazy(() => import('./components/Layout/MoviesList/MoviesList'));
const Header = React.lazy(() => import('./components/Header/Header'));

function App(): any {
  const [searchEntry, setSearchEntry] = useState('');
  const handleSubmit = (searchInput: string): void => {
    setSearchEntry(searchInput);
  };

  return (
    <>
      <MovieItemContextProvider>
        <MovieDialogContextProvider>
          <MovieDetailsContextProvider>
            <ErrorBoundary>
              <React.Suspense fallback={<div>Header is Loading...</div>}>
                <Header handleSubmit={handleSubmit} />
              </React.Suspense>
            </ErrorBoundary>
            <Layout>
              <ErrorBoundary message={DATA_LOADING_ERROR}>
                <NavigationLayout>
                  <GenreNavigation />
                  <MovieSort />
                </NavigationLayout>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <MoviesList searchEntry={searchEntry} />
                </React.Suspense>
              </ErrorBoundary>
            </Layout>
          </MovieDetailsContextProvider>
        </MovieDialogContextProvider>
      </MovieItemContextProvider>
      <Footer>
        <FooterEmail />
      </Footer>
    </>
  );
}

export default App;
