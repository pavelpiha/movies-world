export const DATA_LOADING_ERROR = 'There is some problem with loading data';
export const RED_COLOR = '#f65261';

export const SORT_OPTIONS = [
  { id: 'release date', name: 'Release date' },
  { id: 'title', name: 'Title' },
];

export const MOVIE_CONTEXT_MENU_OPTIONS = [
  { id: 'edit', name: 'Edit' },
  { id: 'remove', name: 'Remove' },
];

export const GENRE_OPTIONS = [
  { label: 'Select genre', value: '' },
  { label: 'Crime', value: 'Crime' },
  { label: 'Documentary', value: 'Documentary' },
  { label: 'Horror', value: 'Horror' },
  { label: 'Comedy', value: 'Comedy' },
];

export const GENRE_FILTER = [
  { id: 'All', value: 'All' },
  { id: 'Crime', value: 'Crime' },
  { id: 'Documentary', value: 'Documentary' },
  { id: 'Horror', value: 'Horror' },
  { id: 'Comedy', value: 'Comedy' },
];

export const ALL_FILTERS = GENRE_FILTER[0].id;
