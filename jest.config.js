module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
      "^react$": "preact/compat",
      "^react-dom/test-utils$": "preact/test-utils",
      "^react-dom$": "preact/compat",
      "^react/jsx-runtime$": "preact/jsx-runtime"
  },
  transformIgnorePatterns: ['node_modules/(?!(@testing-library|preact)/)'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
};