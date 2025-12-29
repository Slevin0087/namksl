import InputPlayerName from "../UI/Pages/InputPlayerName.js";
import { PAGES_IDS } from "../Configs/UIConfigs.js";

export default class UIsManager {
  constructor(container) {
    this.container = container;
    this.uiComponents = new Map();
  }

  registerComponents() {
    this.inputPlayerName = this.uiComponents.set(
      PAGES_IDS.INPUT_PLAER_NAME,
      new InputPlayerName(this.container)
    );
  }
}
