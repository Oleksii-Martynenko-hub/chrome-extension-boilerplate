import { ChakraProvider } from '@chakra-ui/react';

import EmotionCacheProvider from './providers/emotion-cache-provider';

export default function App() {
  return (
    <EmotionCacheProvider>
      <ChakraProvider>
        <div />
      </ChakraProvider>
    </EmotionCacheProvider>
  );
}
