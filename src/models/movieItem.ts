export interface MovieItemModel {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  genres: string[];
  releaseDate: string;
  voteAverage: number;
  runtime: number;
}

export const fromJSON = (json: any): MovieItemModel => {
  if (!json) {
    return;
  }
  return {
    id: json.id,
    title: json.title,
    posterPath: json.poster_path,
    overview: json.overview,
    genres: json.genres,
    releaseDate: json.release_date,
    voteAverage: json.vote_average,
    runtime: json.runtime,
  };
};

export const toJSON = (model: MovieItemModel | Partial<MovieItemModel>): any => ({
  id: model.id,
  title: model.title,
  poster_path: model.posterPath,
  overview: model.overview,
  genres: model.genres,
  release_date: model.releaseDate,
  vote_average: Number.isNaN(model.voteAverage) ? 0 : +model.voteAverage,
  runtime: Number.isNaN(model.runtime) ? 0 : +model.runtime,
});
