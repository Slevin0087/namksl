///////////// IPN - InputPlayerName ////////////////////////

export default class IPNPage {
  constructor() {
    this.elements = {
      form: document.getElementById("inputPlayerName-form"),
      input: document.getElementById("inputPlayerName-name"),
      skipBtn: document.getElementById("skip-inputPlayerName-name"),
    };
  }

  setSubscriptions() {
    this.elements.form.onsubmit = (e) => this.handleSubmit(e);
    this.elements.skipBtn.onclick = () => this.handleSkip();
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get(this.elements.input.name).trim();
    this.stateManager.nameSet(name);
    this.eventManager.emit(GameEvents.ADDED_PLAYER_NAME_STATE);
  }

  render() {}
}
