import { BaseStorage, createStorage, StorageType } from '@src/shared/storages/base';

type PopupState = {
  isOpen: boolean;
  top: number;
  left: number;
};

type PopupStorage = BaseStorage<PopupState> & {
  toggle: () => Promise<void>;
  updatePosition: (updatedPosition: { top: number; left: number }) => Promise<void>;
};

const initPopupState: PopupState = {
  isOpen: false,
  left: 0,
  top: 0,
};

const storage = createStorage<PopupState>('popup-storage-key', initPopupState, {
  storageType: StorageType.Local,
  liveUpdate: true,
});

const popupStorage: PopupStorage = {
  ...storage,

  toggle: async () => {
    await storage.set(({ isOpen, ...rest }) => ({ ...rest, isOpen: !isOpen }));
  },

  updatePosition: async updatedPosition => {
    const { top, left } = updatedPosition;
    await storage.set(rest => ({ ...rest, top, left }));
  },
};

export default popupStorage;
