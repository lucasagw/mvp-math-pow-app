import { useCallback, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useLocalStorage = (key: string = '', initialValue: string = '') => {
  const [state, setState] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = useCallback(
    async (value: string) => {
      try {
        setState(value);
        await AsyncStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(`Error when we tried to store ${key}`, error);
      }
    },
    [key]
  );

  return [state, setValue];
};

export default useLocalStorage;
