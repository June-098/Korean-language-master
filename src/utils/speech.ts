/**
 * Korean Speech Utility
 *
 * Priority:
 *  1. expo-speech  (native TTS — install with: npx expo install expo-speech)
 *  2. Web Speech API (browser / Expo web)
 *  3. Naver Dictionary link (fallback for native without expo-speech)
 */
import { Linking, Platform } from 'react-native';

export const speakKorean = (text: string): void => {
  // 1. Try expo-speech (works on iOS & Android once installed)
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Speech = require('expo-speech');
    Speech.speak(text, { language: 'ko-KR', rate: 0.8 });
    return;
  } catch (_) {
    // expo-speech not installed — fall through
  }

  // 2. Web Speech API (Expo Web / browser)
  if (
    Platform.OS === 'web' &&
    typeof window !== 'undefined' &&
    'speechSynthesis' in window
  ) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.8;
    window.speechSynthesis.speak(utterance);
    return;
  }

  // 3. Naver Dictionary (opens browser — no install required)
  Linking.openURL(
    `https://ko.dict.naver.com/#/search?query=${encodeURIComponent(text)}`
  );
};
