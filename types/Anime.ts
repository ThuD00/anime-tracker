export type Anime = {
  id: number;
  title: {
    romaji: string | null;
    english: string | null;
  }
  coverImage: {
    large: string | null;
  } | null;
  averageScore: string | null;
  episodes: string | null;
};
