import { create } from 'zustand';
// Functions
import * as functions from './auth.functions';
// Types
import { IUser } from '../../types';
import { dateService, userRepo, authService } from '../../common';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';

const initialUserState: IUser = {
  uid: '',
  displayName: '',
  email: '',
  stars: 0,
  ranking: '',
  rankingPoints: 0,
  createdAt: dateService.now(),
  updatedAt: null,
  deletedAt: null,
};

interface AuthState {
  isAuthenticated: boolean;
  user: IUser;
  login: (email: string, password: string) => void;
  logout: () => void;
  register: (email: string, password: string) => void;
  isLoading: boolean;
  resetPassword: (email: string) => void;
  loadUser: () => void;
}

export const useAuthStore = create<AuthState>((_set) => ({
  user: initialUserState,
  isAuthenticated: false,
  isLoading: false,
  login: async (email: string, password: string) => {
    _set({ isLoading: true });
    try {
      const result = await authService.loginWithEmailAndPassword(
        email,
        password
      );
      await AsyncStorage.setItem('user_uid', result.user.uid);
      const response = await userRepo.getUser(result.user.uid);
      _set({ user: response.data, isAuthenticated: true });
    } catch (error: any) {
      const errorMessage = authService.handleFirebaseAuthError(error.code);
      console.error('Error when we tried to login', error);
    } finally {
      _set({ isLoading: false });
    }
  },
  resetPassword: async (email: string) => {
    _set({ isLoading: true });
    try {
      await authService.passwordReset(email);
    } catch (error: any) {
      const errorMessage = authService.handleFirebaseAuthError(error.code);
      console.error('Error when we tried to resetPassword', error);
    } finally {
      _set({ isLoading: false });
    }
  },
  logout: async () => {
    _set({ isLoading: true });
    try {
      await AsyncStorage.setItem('user_uid', '');
      _set({ user: initialUserState, isAuthenticated: false });
    } catch (error) {
      console.error('Error when we tried to logout', error);
    } finally {
      _set({ isLoading: false });
    }
  },
  loadUser: async () => {
    _set({ isLoading: true });
    try {
      const userId = await AsyncStorage.getItem('user_uid');
      if (!userId) throw new Error('Error when we tried to load user uid');
      const response = await userRepo.getUser(userId);
      _set({ user: response.data, isAuthenticated: true });
    } catch (error) {
      console.error('Error when we tried to load user', error);
    } finally {
      _set({ isLoading: false });
    }
  },
  register: async (email: string, password: string) => {
    _set({ isLoading: true });
    try {
      const result = await authService.registerWithEmailAndPassword(
        email,
        password
      );
      const response = await userRepo.storeUser(result);
      _set({ user: response.data, isAuthenticated: true });
    } catch (error: any) {
      const errorMessage = authService.handleFirebaseAuthError(error.code);
      console.error('Error when we tried to register user', error);
    } finally {
      _set({ isLoading: false });
    }
  },
}));
