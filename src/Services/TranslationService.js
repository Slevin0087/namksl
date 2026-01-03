import { CONTAINERS_NAMES } from "../Configs/ContainersNames.js";
import { Translates } from "../locales/Translates.js";

export class TranslationService {
  constructor(container) {
    this.container = container;
    this.statsManager = this.container.get(CONTAINERS_NAMES.STATS_MANAGER)
    this.stats = this.statsManager.translation;
    
    this.init();
  }

  init() {
    this.translate();
  }

  translate() {
    console.log("в translate: ", Translates);

    // Обновление всех текстовых элементов
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      el.textContent = this.t(key);
    });
  }

  t(key) {
    return (
      Translates[this.stats.currentLang]?.ui?.[key] ||
      Translates.en.ui[key] ||
      key
    );
  }
}
