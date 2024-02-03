import { useEffect } from 'react';
import { Button, Box } from '@chakra-ui/react';

import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';

enum MessageType {
  TOGGLE_POPUP = 'toggle-popup',
}

type Message<T = object> = {
  type: MessageType;
  data?: T;
};

export default function Dashboard() {
  const theme = useStorage(exampleThemeStorage);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message: Message) => {
      if (message.type === MessageType.TOGGLE_POPUP) {
        console.log('🚀 ~ chrome.runtime.onMessage.addListener ~ message.type:', message.type);
      }
    });
  }, []);

  return (
    <Box position={'fixed'} top={0} left={0}>
      content view with {theme === 'light' ? 'light' : 'dark'}
      <Button colorScheme={theme === 'light' ? 'teal' : 'purple'} onClick={exampleThemeStorage.toggle}>
        Toggle theme
      </Button>
    </Box>
  );
}
