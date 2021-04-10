module.exports = {
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testRegex: '.*.test.(js|jsx)?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1'
  },
  collectCoverageFrom: ['**/*.{js,jsx}', '!src/index.js']
};
