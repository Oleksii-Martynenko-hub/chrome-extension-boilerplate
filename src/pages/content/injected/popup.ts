import popupStorage from '@root/src/shared/storages/popupStorage';

async function togglePopup() {
  console.log('initial popup', await popupStorage.get());
}

void togglePopup();
