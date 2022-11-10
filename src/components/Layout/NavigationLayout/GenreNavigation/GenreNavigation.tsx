import './GenreNavigation.scss';

const GenreNavigation = (): JSX.Element => {
  const genres = ['All', 'documentary', 'comedy', 'horror', 'crime'];

  const genresTemplate = genres.map((genre, index) => <div key={index}>{genre}</div>);

  return <div className="mwGenresContainer">{genresTemplate}</div>;
};

export default GenreNavigation;
