const path = require("path");
const { mergeConfig } = require('vite');
const vanillaExtractPlugin = require("@vanilla-extract/vite-plugin").vanillaExtractPlugin;

module.exports = {
  stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here

    return mergeConfig(config, {
      plugins: [vanillaExtractPlugin()],
      resolve: {
        alias: [
          {
            find: "@bifrost/core",
            replacement: path.resolve(
              __dirname,
              "../../../packages/bifrost-core/"
            ),
          },
        ],
      },
    });
  },
};
