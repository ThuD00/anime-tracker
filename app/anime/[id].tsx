import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, Image } from 'react-native';
import { AnimeDetails } from "../../types/Anime";
import { getAnimeById } from '../../services/animeApi';
import { useEffect, useState } from 'react';

export default function AnimeDetailsScreen() {
  //lukee reitin mukana tulevan ID:n
  const { id } = useLocalSearchParams<{ id: string }>();

  const [anime, setAnime] = useState<AnimeDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  //hakee animen tiedot ku sivu avataa
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const data = await getAnimeById(id);
        setAnime(data)
      } catch (error) {
        console.log(error);
        setError(
          error instanceof Error ? error.message : 'Unknown error'
        );
        //setError('Failed to load anime details')
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loading} />
  }

  if (error || !anime) {
    return (
      <View style={styles.container}>
        <Text>{error || 'Anime not found'}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Anime ID: {anime.id}</Text>
      
      {anime.coverImage?.large && (
        <Image 
          source={{ uri: anime.coverImage.large }}
          style={styles.animeImage}
        />
      )}

      <Text style={styles.title}>
        {anime.title?.english || anime.title?.romaji || 'Unknown title'}
      </Text>

      <Text>Score: {anime.averageScore ?? 'N/A'}</Text>
      <Text>Episode: {anime.episodes ?? 'Unknown'}</Text>
      <Text>Format: {anime.format ?? 'Unknown'}</Text>
      <Text>Status: {anime.status ?? 'Unknown'}</Text>
      <Text>Year: {anime.seasonYear ?? 'Unknown'}</Text>
      <Text>Genres: {anime.genres.join(', ')}</Text>

      <Text style={styles.descriptionTitle}>Description</Text>
      <Text>
        {anime.description 
        ?.replace(/<br\s*\/?>+/gi, '\n')
        .replace(/<[^>]*>/g, '')
        || 'No description available'}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: 100,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  loading: {
    flex: 1,
  },
  id: {
    marginBottom: 15,
    color: 'gray',
  },
  animeImage: {
    width: 180,
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});