import { Button, Box } from '@chakra-ui/react';

import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';

export default function Dashboard() {
  const theme = useStorage(exampleThemeStorage);

  return (
    <Box position={'fixed'} top={0} left={0}>
      content view with {theme === 'light' ? 'light' : 'dark'}
      <Button colorScheme={theme === 'light' ? 'teal' : 'purple'} onClick={exampleThemeStorage.toggle}>
        Toggle theme
      </Button>
    </Box>
  );
}
