import BaseEffect from './base-effect';

describe('BaseEffect test', () => {
  it('should throw when use instance', () => {
    const effect = new BaseEffect();
    expect(() => effect.apply()).toThrow('method is not implemented');
  });
});
