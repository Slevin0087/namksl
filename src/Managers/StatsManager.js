import { ACTIONS_TYPES } from "../Configs/ActionsConfigs.js";
import { InputPlayerName } from "../Stats/InputPlayerName.js";
import { UIStats } from "../Stats/UIStats.js";

export default class StatsManager {
  constructor() {
    this.subscriptions = [];
  }

  init() {}

  initStats() {
    this.stats = {
      inputPlayerName: new InputPlayerName(),
      ui: new UIStats(),
    };
  }

  dispatch(action) {
    this.stats = this.reducer(this.stats, action);

    this.notifySubscribers();
  }

  reducer(state, action) {
    switch (action.type) {
      case ACTIONS_TYPES.ADD_SCORE:
        return {
          ...state,
          game: {
            ...state.game,
            score: state.game.score + action.payload,
          },
        };

      case "MOVE_CARD":
        return {
          ...state,
          game: {
            ...state.game,
            moves: state.game.moves + 1,
            lastMove: action.payload,
          },
        };

      case "UPDATE_TIME":
        return {
          ...state,
          game: {
            ...state.game,
            playTime: action.payload,
          },
        };

      default:
        return state;
    }
  }

  notifySubscribers() {
    this.subscriptions;
  }
}
