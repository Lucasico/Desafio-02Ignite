import { PropsHeaderContent } from "../types";
export function HeaderContent(selectedGenre: PropsHeaderContent) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.selectedGenre.title}</span>
      </span>
    </header>
  );
}
