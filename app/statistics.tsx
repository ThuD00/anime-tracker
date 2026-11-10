import { View, Text, StyleSheet } from 'react-native';

export default function MyStatistics() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My AnimeList!</Text>
      <Text>Track your favorite anime</Text>
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
