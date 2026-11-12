import { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function SearchAnime() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Anime</Text>
      <Text>Find anime you want to watch</Text>

      <TextInput
      style={styles.searchInput}
      placeholder='Search anime...'
      value={searchQuery}
      onChangeText={setSearchQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 15,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
  },
});
