import { Anime, AnimeDetails } from "../types/Anime";

const API_URL = 'https://graphql.anilist.co';

export async function searchAnime(search: string): Promise<Anime[]> {

  //page: antaa monta tuloksia kerral + pagination
  const query = `
  query ($search: String) {
    Page { 
      media(search: $search, type: ANIME) {
        id
        title {
          romaji
          english
        }
        coverImage {
          large
        }
        averageScore
        episodes
      }
    }
  }
  `;

  const response = await fetch(API_URL, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: {
          search: search,
        },
      }),
  });

  const result = await response.json();

  if (!response.ok || result.errors) {
    throw new Error('Failed to fetch anime details');
  }

  return result.data.Page.media;
}

export async function getAnimeById(id: string): Promise<AnimeDetails | null> {

  const query = `
  query ($id: Int) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
      }
      description(asHtml: false)
      coverImage {
        large
      }
      averageScore
      episodes
      genres
      format
      status
      seasonYear
    }
  }
  `;

  const response = await fetch(API_URL, {
    method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: {
          id: Number(id),
        },
      }),
  });

  const result = await response.json();

  if (!response.ok || result.errors) {
    console.log('AniList error:', result.errors ?? result);
    throw new Error(
      JSON.stringify(result.errors ?? result)
    );
  }

  /*console.log('Anime ID received:', id);
  console.log('AniList response:', JSON.stringify(result.data, null, 2));*/
  return result.data.Media;
  
}