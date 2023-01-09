export const DATA_LOADING_ERROR = 'There is some problem with loading data';
export const RED_COLOR = '#f65261';

export const SORT_BY = 'sortBy';
export const FILTER_BY = 'filter';
export const MOVIE_DETAILS = 'movie';
export const SEARCH_STRING = 'searchString';

export const SORT_OPTIONS = [
  { id: 'release date', name: 'Release date' },
  { id: 'title', name: 'Title' },
];

export const MOVIE_CONTEXT_MENU_OPTIONS = [
  { id: 'edit', name: 'Edit' },
  { id: 'remove', name: 'Remove' },
];

export const GENRE_OPTIONS = [
  { label: 'Crime', value: 'crime' },
  { label: 'Documentary', value: 'documentary' },
  { label: 'Horror', value: 'horror' },
  { label: 'Comedy', value: 'comedy' },
];

export const GENRE_FILTER = [
  { id: 'all', value: 'all' },
  { id: 'crime', value: 'crime' },
  { id: 'documentary', value: 'documentary' },
  { id: 'horror', value: 'horror' },
  { id: 'comedy', value: 'comedy' },
];

export const ALL_FILTERS = GENRE_FILTER[0].id;
