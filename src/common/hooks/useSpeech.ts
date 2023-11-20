import { useMemo, useState } from 'react';
import {
  SpeechOptions,
  getAvailableVoicesAsync,
  speak,
  stop,
} from 'expo-speech';

const useSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const defaultOptions = useMemo<SpeechOptions>(
    () => ({
      language: 'pt-BR',
      pitch: 1.0,
      rate: 1.0,
      onDone() {
        setIsSpeaking(false);
      },
      onStart() {
        setIsSpeaking(true);
      },
      onPause() {
        setIsSpeaking(false);
      },
      onStopped() {
        setIsSpeaking(false);
      },
      volume: 1.0,
    }),
    []
  );

  const handleSpeak = (text: string = '') => {
    speak(text, defaultOptions);
  };

  const getVoices = async () => {
    const voices = await getAvailableVoicesAsync();
    return voices;
  };

  const handleStop = async () => {
    return await stop();
  };

  const toggleSpeech = async (text: string = '') => {
    if (isSpeaking) return await handleStop();
    handleSpeak(text);
  };

  return {
    isSpeaking,
    handleSpeak,
    handleStop,
    getVoices,
    toggleSpeech,
  };
};

export default useSpeech;
