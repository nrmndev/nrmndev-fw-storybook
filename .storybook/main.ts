import type { StorybookConfig } from "@storybook/react-vite";
//import { getCodeEditorStaticDirs } from "storybook-addon-code-editor/getStaticDirs";

const config: StorybookConfig = {
  //staticDirs: [...getCodeEditorStaticDirs(__filename)],
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-docs",
    //"@storybook/addon-onboarding",
    // "@storybook/addon-links",
    //"storybook-addon-code-editor",
    "@storybook/addon-essentials",
    //"@storybook/addon-a11y",
    //"@chromatic-com/storybook",
    // "@storybook/addon-interactions",
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      // Filter out third-party props from node_modules except @mui packages.
      // propFilter: (prop) =>
      //   prop.parent
      //     ? !/node_modules\/(?!@mui)/.test(prop.parent.fileName)
      //     : true,
    },
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
