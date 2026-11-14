import { View, Text, StyleSheet } from 'react-native';

export default function MyAnimeList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My AnimeList!</Text>
      <Text>Manage your anime collection</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
