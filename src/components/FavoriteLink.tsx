"use client";

interface FavoriteLinkProps {
  url: string;
}

export const FavoriteLink: React.FC<FavoriteLinkProps> = ({ url }) => {
  return (
    <li className="my-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-600"
      >
        {url}
      </a>
    </li>
  );
};
