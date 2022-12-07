export class MovieItemModel {
  id: number;
  title: string = '';
  posterPath: string = '';
  overview: string = '';
  genres: string[] = [];
  releaseDate: string = '';
  voteAverage: number = 0;
  runtime: number = 0;

  static fromJSON(json: any): MovieItemModel {
    if (!json) {
      return;
    }
    const item = new MovieItemModel();
    item.id = json.id;
    item.title = json.title;
    item.posterPath = json.poster_path;
    item.overview = json.overview;
    item.genres = json.genres;
    item.releaseDate = json.release_date;
    item.voteAverage = json.vote_average;
    item.runtime = json.runtime;
    return item;
  }

  static toJSON(model: MovieItemModel | Partial<MovieItemModel>): any {
    return {
      id: model.id,
      title: model.title,
      poster_path: model.posterPath,
      overview: model.overview,
      genres: model.genres,
      release_date: model.releaseDate,
      vote_average: Number.isNaN(model.voteAverage) ? 0 : +model.voteAverage,
      runtime: Number.isNaN(model.runtime) ? 0 : +model.runtime,
    };
  }
}
