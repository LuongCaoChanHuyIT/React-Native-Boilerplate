import { Stack } from 'expo-router';

import { Welcome } from '@/templates/Welcome';

const Feed = () => (
  <>
    <Stack.Screen
      options={{
        title: 'My home',
      }}
    />
    <Welcome />
  </>
);

export default Feed;
