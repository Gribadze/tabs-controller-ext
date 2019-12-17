module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!src/background.js', '!src/storage.js'],
  notify: true,
  testEnvironment: 'node',
  verbose: true,
};
