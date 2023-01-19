import GenreButton from "./GenreButton";

interface SideBarProps {
  genres: Array<{
    id: number;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  buttonClickCallback,
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <GenreButton
            key={String(genre.id)}
            genreId={genre.id}
            title={genre.title}
            name={genre.name}
            onClick={buttonClickCallback}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
