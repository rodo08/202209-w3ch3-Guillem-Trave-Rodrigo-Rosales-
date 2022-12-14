/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/src/**/*.test.ts"],
  resolver: "jest-ts-webcompat-resolver",
  collectCoverageFrom: [
    "**/src/**/*.ts",
    "!**/src/**/index.ts",
    "!**/src/**/series.ts",
    "!**/src/**/types.ts",
  ],
};
