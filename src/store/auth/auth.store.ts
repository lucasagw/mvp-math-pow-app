import { create } from 'zustand';
// Functions
import * as functions from './auth.functions';

interface User {
  id: string;
  name: string;
  email: string;
  stars: number;
  ranking: string;
  rankingPosition: number;
}

const initialUserState: User = {
  id: '',
  name: '',
  email: '',
  stars: 0,
  ranking: '',
  rankingPosition: 0,
};

interface AuthState {
  isAuthenticated: boolean;
  user: User;
  login: () => void;
  logout: () => void;
  register: () => void;
  persist: () => void;
  isLoading: boolean;
}

export const useAuthStore = create<AuthState>((_set) => ({
  user: initialUserState,
  login: functions.login,
  logout: functions.logout,
  register: functions.register,
  isAuthenticated: false,
  isLoading: false,
  persist: () => {},
}));
