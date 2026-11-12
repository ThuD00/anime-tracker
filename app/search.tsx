import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, 
         Pressable, ActivityIndicator, Image } from 'react-native';
import { searchAnime } from '../services/animeApi';
import { Anime } from '../types/Anime';

//tyyppi määritelty, virheenkäsittely jos anime:ta ei löydy, hakutulosten määrä lisäys
export default function SearchAnime() {
  const [searchQuery, setSearchQuery] = useState('');
  const [result, setResult] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(false);
  //Virhekäsittely: 403
  const [error, setError] = useState('');
  
  const handleSearch = async () => {
    //hakukenttä ei tyhjä
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError('');
    setResult([]);

    try {
      const anime = await searchAnime(searchQuery);
      setResult(anime);
    } catch (error) {
      //console.error('failed: ', error)
      setError('Failed to search anime. Please try again after few seconds');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Search Anime</Text>
      <Text>Find anime you want to watch</Text>

      <TextInput
      style={styles.searchInput}
      placeholder='Search anime...'
      value={searchQuery}
      onChangeText={setSearchQuery}
      onSubmitEditing={handleSearch}
      returnKeyType="search"
      />

      <Pressable 
        style={styles.searchButton}
        onPress={handleSearch}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Search</Text>
      </Pressable>

      {loading && (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      )}

      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}

      {/* !loading: varmistaa ettei n näytetä kesken haun */}
      {!loading && result.length > 0 && (
        <Text style={styles.resultCount}>
          Found {result.length} anime
        </Text>
      )}

      {result.map((anime) => (
        <View key={anime.id} style={styles.resultCard}>
          {/* tarkistaa onko kuva olemassa */}
          {anime.coverImage?.large && (
            <Image 
            source={{ uri: anime.coverImage.large }}
            style={styles.resultImage}
            />
          )}

          <View style={styles.resultInfo}>
            <Text style={styles.animeTitle}>
              {anime.title.english || anime.title.romaji}
            </Text>

            <Text>★ {anime.averageScore ?? 'N/A'}</Text>

            <Text>
               Episodes: {anime.episodes ?? 'Unknown'}
            </Text>
          </View>
        </View>
      ))}

      {/* haku ei ole käynnis/tuloksia x/!hakukenttä.empty/!virhe */}
      {!loading && result.length === 0 && searchQuery.trim() !== '' && !error && (
          <Text style={styles.noResults}>
            No anime found. Try another search.
          </Text>
        )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  searchButton: {
    backgroundColor: '#7866c6',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  resultCard: {
    flexDirection: 'row',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
  },
  resultImage: {
    width: 80,
    height: 110,
    borderRadius: 8,
  },
  resultInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    marginTop: 15,
  },
  animeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noResults: {
    marginTop: 20,
    textAlign: 'center',
    color: '#777',
    fontSize: 14,
  },
  resultCount: {
    marginTop: 20,
    marginBottom: 5,
    fontSize: 14,
    color: '#777',
  },
});
