module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: { "^.+\\.jsx?$": "babel-jest" },
  moduleNameMapper: {
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/mocks/fileMock.ts",
  },
};
