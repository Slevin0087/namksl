export class Container {
  constructor() {
    this.components = new Map();
  }

  register(componentName, component) {
    this.components.set(componentName, component);
    return this;
  }
}
