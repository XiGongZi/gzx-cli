module.exports = {
  npmUrl: "https://gitee.com/gongzixi/gzx-cli.git",
  promptTypeList: [
    {
      type: "list",
      message: "Please select the template type to pull:",
      name: "type",
      choices: [
        {
          name: "1 js-module-template",
          value: {
            url: "https://gitee.com/gongzixi/js-module-template.git",
            gitName: "js-module-template",
            val: "js-module-template",
          },
        },
        {
          name: "2 html-js-template",
          value: {
            url: "https://gitee.com/gongzixi/html-js-template.git",
            gitName: "html-js-template",
            val: "html-js-template",
          },
        },
        {
          name: "3 html-ts-template",
          value: {
            url: "https://gitee.com/gongzixi/html-ts-template.git",
            gitName: "html-ts-template",
            val: "html-ts-template",
          },
        },
      ],
    },
  ],
};
