import { Anime } from "../types/Anime";

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

  if (!response.ok) {
    throw new Error('Failed to fetch anime');
  }

  const result = await response.json();

  return result.data.Page.media;
}