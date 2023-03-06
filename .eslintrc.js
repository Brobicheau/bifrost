module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-bifrost`
  extends: ["bifrost"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
