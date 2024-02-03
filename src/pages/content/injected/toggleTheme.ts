import exampleThemeStorage from '@src/shared/storages/exampleThemeStorage';

async function toggleTheme() {
  console.log('initial theme', await exampleThemeStorage.get());
}

void toggleTheme();
