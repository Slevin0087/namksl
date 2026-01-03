export class Container {
  constructor() {
    this.components = new Map();
  }

  register(componentName, component) {
    this.components.set(componentName, component);
    return this;
  }

  get(name) {
    if (this.components.has(name)) {
      return this.components.get(name);
    }
    throw new Error(`Service "${name}" not found in container`);
  }
}
