export type Anime = {
  id: number;
  title: {
    romaji: string | null;
    english: string | null;
  }
  coverImage: {
    large: string | null;
  } | null;
  averageScore: number | null;
  episodes: number | null;
};

export type AnimeDetails = {
  id: number;
  title: {
    romaji: string | null;
    english: string | null;
  }
  description: string | null;
  coverImage: {
    large: string | null;
  } | null;
  averageScore: number | null;
  episodes: number | null;
  genres: string [];
  format: string | null;
  status: string | null;
  seasonYear: number | null;
};
