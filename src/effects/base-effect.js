export default class BaseEffect {
  constructor() {
    this.apply = this.apply.bind(this);
  }

  apply() {
    throw new Error('method is not implemented');
  }
}
