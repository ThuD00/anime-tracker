import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    //alavalikko
    <Tabs
      //määrittää yhden navigoitavan sivun
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#6750A4',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search Anime',
          tabBarLabel: 'Search',
        }}
      />

      <Tabs.Screen
        name="my-list"
        options={{
          title: 'My AnimeList',
          tabBarLabel: 'My List',
        }}
      />

      <Tabs.Screen
        name="statistics"
        options={{
          title: 'Statistics',
          tabBarLabel: 'Statistics',
        }}
      />

      <Tabs.Screen
        name="anime/[id]"
        options={{
          //piilottaa animen yksittäisen tietosivun alavalikosta
          href: null,
        }}
      />
    </Tabs>
  );
}
