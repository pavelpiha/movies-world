import './GenreNavigation.scss';

const GenreNavigation = (): JSX.Element => {
  const genres = ['All', 'documentary', 'comedy', 'horror', 'crime'];

  const genresTemplate = genres.map((genre) => <div key={genre}>{genre}</div>);

  return <div className="mwGenresContainer">{genresTemplate}</div>;
};

export default GenreNavigation;
