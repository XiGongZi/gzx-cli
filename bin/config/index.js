module.exports = {
  npmUrl: "https://github.com/XiGongZi/gzx-cli",
  promptTypeList: [
    {
      type: "list",
      message: "Please select the template type to pull:",
      name: "type",
      choices: [
        {
          name: "1 js-module-template",
          value: {
            url: "https://github.com/XiGongZi/cli-js-module-template.git",
            gitName: "js-module-template",
            val: "js-module-template",
          },
        },
        {
          name: "2 html-js-template",
          value: {
            url: "https://github.com/XiGongZi/cli-html-js-template.git",
            gitName: "html-js-template",
            val: "html-js-template",
          },
        },
        {
          name: "3 html-ts-template",
          value: {
            url: "https://github.com/XiGongZi/cli-html-ts-template.git",
            gitName: "rf-ts-template",
            val: "rf-ts-template",
          },
        },
      ],
    },
  ],
};
