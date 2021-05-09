import { PropsContent } from "../types";
import { HeaderContent } from "../components/HeaderContent";
import { MovieCard } from "../components/MovieCard";
import "../styles/content.scss";

export function Content({ movies, selectedGenre }: PropsContent) {
  return (
    <div className="container">
      <HeaderContent selectedGenre={selectedGenre} />
      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
