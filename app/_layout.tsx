import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="anime/[id]"
        options={{
          title: 'Anime Details',
        }}
      />
    </Stack>
    
  )
}