module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(react-leaflet/lib|@react-leaflet/core/lib)/)'
  ]
}
