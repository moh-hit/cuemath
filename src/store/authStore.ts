import type {StateCreator} from 'zustand';

import {createStore, useStore} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

import mmkvStorage from './mmkv';

export type UserDetail = {
  email: string;
  password: string;
  firstName: string;
  age: number;
};

type AuthStore = {
  users: UserDetail[];
  setUsers: (users: UserDetail) => void;
};

const initializer: StateCreator<AuthStore> = setState => ({
  users: [],
  setUsers: users =>
    setState(state => {
      state.users = [...state.users, users];
      return state;
    }),
});

export const authStore = createStore<AuthStore>()(
  devtools(
    persist(initializer, {
      name: 'authStore',
      version: 1,
      storage: mmkvStorage,
    }),
  ),
);

const useAuthStore = () => useStore(authStore);

export default useAuthStore;
