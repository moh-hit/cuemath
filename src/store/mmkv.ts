import {MMKV} from 'react-native-mmkv';
import {createJSONStorage} from 'zustand/middleware';

export const storage = new MMKV();

const mmkvStorage = createJSONStorage(() => ({
  setItem: (name, value) => {
    storage.set(name, value);
  },
  getItem: name => {
    const value = storage.getString(name);
    return value ?? null;
  },
  removeItem: name => {
    storage.delete(name);
  },
}));

export default mmkvStorage;
