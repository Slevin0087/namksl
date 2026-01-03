import { LOCAL_STORAGE_KEYS } from "../Configs/LocalStorageKeys.js";
import { LANGUAGES } from "../Configs/translationConfigs.js";

export class TranslationStats {
  constructor(localStorage) {
    this.localStorage = localStorage;
    this.currentLang =
      localStorage.getItem(LOCAL_STORAGE_KEYS.CURRENT_LANG) || LANGUAGES.EN;
  }
}
