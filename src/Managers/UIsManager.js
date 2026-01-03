import IPNPage from "../UI/Pages/IPNPage.js";
import { PAGES_IDS } from "../Configs/UIConfigs.js";

export default class UIsManager {
  constructor(container) {
    this.container = container;
    this.uiComponents = new Map();

    this.init()
  }

  init() {
    this.inputPlayerName = this.uiComponents.set(
      PAGES_IDS.INPUT_PLAER_NAME,
      new IPNPage(this.container)
    );
  }
}
