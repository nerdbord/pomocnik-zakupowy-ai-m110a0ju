"use client";

interface FavoriteLinkProps {
  url: string;
}

export const FavoriteLink: React.FC<FavoriteLinkProps> = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline hover:text-blue-600"
    >
      {url}
    </a>
  );
};
