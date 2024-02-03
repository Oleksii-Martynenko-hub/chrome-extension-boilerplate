import { ChakraProvider } from '@chakra-ui/react';

import EmotionCacheProvider from './providers/emotion-cache-provider';
import Dashboard from './dashboard';

export default function App() {
  return (
    <EmotionCacheProvider>
      <ChakraProvider>
        <Dashboard />
      </ChakraProvider>
    </EmotionCacheProvider>
  );
}
