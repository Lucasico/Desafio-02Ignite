export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface PropsSideBar {
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
}

export interface PropsContent {
  movies: Array<MovieProps>;
  selectedGenre: GenreResponseProps;
}

export interface PropsHeaderContent {
  selectedGenre: GenreResponseProps;
}
