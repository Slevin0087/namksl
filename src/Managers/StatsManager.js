import { ACTIONS_TYPES } from "../Configs/ActionsConfigs.js";
import { TranslationStats } from "../Stats/TranslationStats.js";
import { IPNStats } from "../Stats/IPNStats.js";
import { UIStats } from "../Stats/UIStats.js";
import { GameStats } from "../Stats/GameStats.js";
import { CONTAINERS_NAMES } from "../Configs/ContainersNames.js";
import { ScoresStats } from "../Stats/ScoresStats.js";

export default class StatsManager {
  constructor(container) {
    this.container = container;
    this.localStorage = this.container.get(CONTAINERS_NAMES.LOCAL_STORAGE);
    this.subscriptions = [];

    this.init();
  }

  init() {
    this.translation = new TranslationStats(this.localStorage);
    this.scores = new ScoresStats(this.localStorage);
    this.game = new GameStats();
    this.inputPlayerName = new IPNStats(this.localStorage);
    this.ui = new UIStats(this.localStorage);
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
