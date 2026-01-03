import StatsManager from "./Managers/StatsManager.js";
import UIsManager from "./Managers/UIsManager.js";
import { Container } from "./utils/Container.js";
import { CONTAINERS_NAMES } from "./Configs/ContainersNames.js";
import { LocalStorage } from "./utils/LocalStorage.js";
import { TranslationService } from "./Services/TranslationService.js";

export default class App {
  constructor() {
    this.container = new Container();
  }

  init() {
    this.localStorage = this.container.register(
      CONTAINERS_NAMES.LOCAL_STORAGE,
      new LocalStorage()
    );
    this.statsManager = this.container.register(
      CONTAINERS_NAMES.STATS_MANAGER,
      new StatsManager(this.container)
    );
    this.uisManager = this.container.register(
      CONTAINERS_NAMES.UIS_MANAGER,
      new UIsManager(this.container)
    );
    this.translationService = this.container.register(
      CONTAINERS_NAMES.TRANSLATION_SERVICE,
      new TranslationService(this.container)
    );
    console.log("app.init()");
  }
}
