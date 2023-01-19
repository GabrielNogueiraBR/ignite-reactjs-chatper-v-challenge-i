import React, { memo, useCallback } from "react";
import { Button } from "./Button";

interface GenreButtonProps {
  genreId: number;
  title: string;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  selected: boolean;
  onClick: (id: number) => void;
}

const GenreButtonComponent = ({
  genreId,
  title,
  name,
  onClick,
  selected,
}: GenreButtonProps) => {
  const handleClick = useCallback(() => {
    onClick(genreId);
  }, []);

  return (
    <Button
      title={title}
      iconName={name}
      onClick={handleClick}
      selected={selected}
    />
  );
};

const GenreButton = memo(GenreButtonComponent, (prevProps, nextProps) => {
  return (
    prevProps.selected === nextProps.selected &&
    prevProps.onClick === nextProps.onClick &&
    prevProps.title === nextProps.title &&
    prevProps.name === nextProps.name &&
    prevProps.genreId === nextProps.genreId
  );
});

export default GenreButton;
