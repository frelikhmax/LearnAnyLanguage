import { Language } from "./data/InitialWords";

export const setNativeLanguage = (language: Language) => ({
    type: 'SET_NATIVE_LANGUAGE',
    payload: language,
  });