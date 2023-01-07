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
import { DATA_LOADING_ERROR, FILTER_BY, SORT_BY } from '../../constants/constants';
import MovieDetailsContextProvider from '../../contexts/MovieDetailsContext';
import MovieDialogContextProvider from '../../contexts/MovieDialogContext';
import MovieItemContextProvider from '../../contexts/MovieItemContext';
import { wrapper } from '../../redux/store';
import { api } from '../../services/api';

import '@fontsource/montserrat';

export default function App(): any {
  const urlQuery: URLSearchParams = useQuery();
  const genreFilterValue: string = urlQuery.get(FILTER_BY);
  const sortBy: string = urlQuery.get(SORT_BY);
  const filters = genreFilterValue?.toLowerCase().split(',');
  const { data = [] } = api.useGetMoviesQuery({
    searchEntry: '',
    sortBy,
    filters,
  });
  return (
    <>
      <MovieItemContextProvider>
        <MovieDialogContextProvider>
          <MovieDetailsContextProvider>
            <ErrorBoundary>
              <Header />
            </ErrorBoundary>
            <Layout>
              <ErrorBoundary message={DATA_LOADING_ERROR}>
                <NavigationLayout>
                  <GenreNavigation />
                  <MovieSort />
                </NavigationLayout>
                <MoviesList data={data} />
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

/*
/ Make sure to use Node > 16
*/

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  store.dispatch(api.endpoints.getMovies.initiate({}));
  await Promise.all(store.dispatch(api.util.getRunningQueriesThunk()));
  return {
    props: {},
  };
});
