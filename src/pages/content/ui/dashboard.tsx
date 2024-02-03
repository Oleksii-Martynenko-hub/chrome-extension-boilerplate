import { useEffect } from 'react';
import { DraggableEventHandler } from 'react-draggable';
import { Button, Box, Text } from '@chakra-ui/react';

import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';
import popupStorage from '@root/src/shared/storages/popupStorage';

import DraggableBox from './components/draggable-box/draggable-box';

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

  const handleOnStop: DraggableEventHandler = (e, data) => {
    popupStorage.updatePosition({ top: data.y, left: data.x });
  };

  return (
    <Box position={'fixed'} top={top ?? 0} left={left ?? 0}>
      {isOpen && (
        <DraggableBox defaultPosition={{ x: left ?? 0, y: top ?? 0 }} onStop={handleOnStop}>
          <Box bg={theme === 'light' ? 'whitesmoke' : '#222'} color={theme === 'light' ? '#222' : 'white'}>
            <Box p={4} display="flex" alignItems="center" justifyContent="space-between">
              <Text
                as="header"
                display="flex"
                alignItems="center"
                width="100%"
                height="24px"
                color={theme === 'light' ? '#222' : 'white'}
                fontWeight="bold"
                cursor="move"
                className={DraggableBox.handlerClassName}>
                Draggable popup title
              </Text>
              <Button
                className="close-button"
                colorScheme={theme === 'light' ? 'teal' : 'purple'}
                onClick={popupStorage.toggle}>
                X
              </Button>
            </Box>

            <Box className="container" p={4}>
              content view with {theme === 'light' ? 'light' : 'dark'}
              <Button colorScheme={theme === 'light' ? 'teal' : 'purple'} onClick={exampleThemeStorage.toggle}>
                Toggle theme
              </Button>
            </Box>
          </Box>
        </DraggableBox>
      )}
    </Box>
  );
}
