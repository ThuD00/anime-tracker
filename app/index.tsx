import { View, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { animeData, currentlyWatching, recentlyWatched } from '../data/animeData';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Discover Anime!</Text>
      <Text style={styles.subtitle}>Find your next favorite anime.</Text>

      <Text style={styles.sectionTitle}>Top anime</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search anime..."
      />

      {/* vaakasuuntainen vieritys */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* käy taulukon jokaisen alkion läpi ja luo kortin */}
        {animeData.map((anime) => (
          <View key={anime.id} style={styles.animeCard}>
            <Image 
              source={{ uri: anime.image}}
              style={styles.animeImage}
            />
            <Text style={styles.animeTitle}>{anime.title}</Text>
            <Text style={styles.animeScore}>★ {anime.score}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Currently Watching</Text>

      {currentlyWatching.map((anime) => (
        <View key={anime.id} style={styles.watchingCard}>
          <Image 
            source={{ uri: anime.image}}
            style={styles.watchingImage}
          />
          <View style={styles.watchingInfo}>
            <Text style={styles.animeTitle}>{anime.title}</Text>
            <Text style={styles.animeScore}>
              Episode {anime.episodesWatched} / {anime.totalEpisodes}
            </Text>

            <View style={styles.progressBackground}>
              <View style={[
                styles.progressBar,
                {
                  width: `${(anime.episodesWatched / anime.totalEpisodes) * 100}%,`
                },
              ]}
              />
            </View>
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Quick Stats</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Watching</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Plan to Watch</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Recently Watched</Text>
      {recentlyWatched.map((anime) => (
        <View key={anime.id} style={styles.watchingCard}>
          <Image 
            source={{ uri: anime.image}}
            style={styles.watchingImage}
          />
          <View style={styles.watchingInfo}>
            <Text style={styles.animeTitle}>{anime.title}</Text>
            <Text style={styles.animeScore}>
              Episode {anime.episode}
            </Text>
            <Text style={styles.animeScore}>
              {anime.watchedDate}
            </Text>
          </View>
        </View>
      ))}
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
    fontSize: 22,
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
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  animeCard: {
    width: 140,
    marginRight: 15,
  },
  animeImage: {
    width: 140,
    height: 190,
    borderRadius: 10,
  },
  animeTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  animeScore: {
    fontSize: 13,
    color: '#777',
    marginTop: 4,
  },
  watchingCard: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
  },
  watchingImage: {
    width: 80,
    height: 110,
    borderRadius: 8,
  },
  watchingInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  progressBackground: {
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginTop: 10,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#7866c6',
    borderRadius: 5,
  },
  statsContainer: {
    //asettaa kortit vierekkäin
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7866c6',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
});
