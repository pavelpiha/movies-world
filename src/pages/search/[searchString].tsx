import React from 'react';

import { useQuery } from '../../components/common/hooks/useQuery';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import Footer from '../../components/Footer/Footer';
import FooterEmail from '../../components/Footer/FooterEmail/FooterEmail';
import Header from '../../components/Header/Header';
import Layout from '../../components/Layout/Layout';
import MoviesList from '../../components/Layout/MoviesList/MoviesList';
import GenreNavigation from '../../components/Layout/NavigationLayout/GenreNavigation/GenreNavigation';
import MovieSort from '../../components/Layout/NavigationLayout/MovieSort/MovieSort';
import NavigationLayout from '../../components/Layout/NavigationLayout/NavigationLayout';
import { DATA_LOADING_ERROR, FILTER_BY, SEARCH_STRING, SORT_BY } from '../../constants/constants';
import MovieDetailsContextProvider from '../../contexts/MovieDetailsContext';
import MovieDialogContextProvider from '../../contexts/MovieDialogContext';
import MovieItemContextProvider from '../../contexts/MovieItemContext';
import { wrapper } from '../../redux/store';
import { api } from '../../services/api';

import '@fontsource/montserrat';

function App(): any {
  const queryParams = useQuery();
  const searchString: string = queryParams.get(SEARCH_STRING);
  const genreFilterValue: string = queryParams.get(FILTER_BY);
  const sortBy: string = queryParams.get(SORT_BY);
  const filters = genreFilterValue?.toLowerCase().split(',');
  const { data = [] } = api.useGetMoviesQuery({
    searchEntry: searchString !== 'undefined' ? searchString : '',
    sortBy,
    filters,
  });
  return (
    <>
      <MovieItemContextProvider>
        <MovieDialogContextProvider>
          <MovieDetailsContextProvider>
            <ErrorBoundary>
              <React.Suspense fallback={<div>Header is Loading...</div>}>
                <Header />
              </React.Suspense>
            </ErrorBoundary>
            <Layout>
              <ErrorBoundary message={DATA_LOADING_ERROR}>
                <NavigationLayout>
                  <GenreNavigation />
                  <MovieSort />
                </NavigationLayout>
                <React.Suspense fallback={<div>Loading...</div>}>
                  <MoviesList data={data} />
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

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  store.dispatch(api.endpoints.getMovies.initiate({ searchEntry: '' }));
  await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));
  return {
    props: {},
  };
});
