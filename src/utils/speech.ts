import {
  SpeechOptions,
  getAvailableVoicesAsync,
  isSpeakingAsync,
  pause,
  resume,
  speak,
  stop,
} from 'expo-speech';

const defaultOptions: SpeechOptions = {
  language: 'pt-BR',
  pitch: 1.0,
  rate: 1.0,
};

class Speech {
  options: SpeechOptions = defaultOptions;
  constructor(options: SpeechOptions = defaultOptions) {
    this.options = options;
  }
  handleSpeak(text: string) {
    speak(text);
  }

  async getVoices() {
    const voices = await getAvailableVoicesAsync();
    return voices;
  }
  async isSpeaking() {
    return await isSpeakingAsync();
  }
  async handlePause() {
    return await pause();
  }

  async handleResume() {
    const isSpeaking = await this.isSpeaking();
    if (!isSpeaking) return await resume();
  }

  async handleStop() {
    return await stop();
  }
}

const speech = new Speech();
export default speech;
