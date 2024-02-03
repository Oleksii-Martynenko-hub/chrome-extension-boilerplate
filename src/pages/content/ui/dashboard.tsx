import { useEffect } from 'react';
import { Button, Box } from '@chakra-ui/react';

import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';
import popupStorage from '@root/src/shared/storages/popupStorage';

enum MessageType {
  TOGGLE_POPUP = 'toggle-popup',
}

type Message<T = object> = {
  type: MessageType;
  data?: T;
};

export default function Dashboard() {
  const theme = useStorage(exampleThemeStorage);
  const { isOpen, top, left } = useStorage(popupStorage);

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message: Message) => {
      if (message.type === MessageType.TOGGLE_POPUP) {
        popupStorage.toggle();
      }
    });
  }, []);

  return (
    <Box position={'fixed'} top={top} left={left}>
      {isOpen && (
        <Box bg={theme === 'light' ? 'whitesmoke' : '#222'} color={theme === 'light' ? '#222' : 'white'}>
          <Button colorScheme={theme === 'light' ? 'teal' : 'purple'} onClick={popupStorage.toggle}>
            X
          </Button>

          <Box className="container" p={4}>
            content view with {theme === 'light' ? 'light' : 'dark'}
            <Button colorScheme={theme === 'light' ? 'teal' : 'purple'} onClick={exampleThemeStorage.toggle}>
              Toggle theme
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
