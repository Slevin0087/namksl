///////////// IPN - InputPlayerName ////////////////////////

export class IPNStats {
  constructor(localStorage) {
    this.localStorage = localStorage
    this.inputedPlayerName = "";
  }

  init() {}

  initStats() {
    this.stats = {};
  }
}
