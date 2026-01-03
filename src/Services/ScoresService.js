import { CONTAINERS_NAMES } from "../Configs/ContainersNames"

export class ScoresService {
  constructor(container) {
    this.container = container
    this.stateManager = this.container.get(CONTAINERS_NAMES.STATS_MANAGER)
    this.stats = this.stateManager.scores
  }
}
