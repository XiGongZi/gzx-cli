#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const commander = require("commander");
const inquirer = require("inquirer");
const checkDire = require("./utils/checkDire.js");
const { exec } = require("child_process");
const { version } = require("../package.json");
const { promptTypeList } = require("./config");

commander
  .version(version, "-v, --version")
  .command("init <projectName>")
  .alias("i")
  .description("Enter the project name and initialize the project template")
  .action(async (projectName, cmd) => {
    await checkDire(path.join(process.cwd(), projectName), projectName);
    inquirer.prompt(promptTypeList).then((result) => {
      const { url, gitName, val } = result.type;
      console.log(
        "The template type information you selected is as follows：" + val
      );
      console.log("Project initialization copy acquisition...");
      if (!url) {
        console.log(
          chalk.red(`${val} This type is not supported at the moment...`)
        );
        process.exit(1);
      }
      exec("git clone " + url, function (error, stdout, stderr) {
        if (error !== null) {
          console.log(chalk.red(`clone fail,${error}`));
          return;
        }
        fs.rename(gitName, projectName, (err) => {
          if (err) {
            exec("rm -rf " + gitName, function (err, out) {});
            console.log(
              chalk.red(`The ${projectName} project template already exist`)
            );
          } else {
            if (fs.existsSync(`./${projectName}/package.json`)) {
              const packageJson = JSON.parse(
                fs.readFileSync(`./${projectName}/package.json`, "utf-8")
              );
              packageJson.name = projectName;
              packageJson.version = "0.0.1";
              packageJson.homepage = ``;
              fs.writeFileSync(
                `./${projectName}/package.json`,
                JSON.stringify(packageJson, null, 2),
                "utf-8"
              );
              exec(`git add -A && git commit -m "package modify"`, {
                cwd: `./${projectName}`,
              });
            }
            if (fs.existsSync(`./${projectName}/.git/config`)) {
              exec("git remote rm origin", { cwd: `./${projectName}` });
              console.log(
                chalk.green(
                  `✔ The ${projectName} project template successfully create`
                )
              );
            }
          }
        });
      });
    });
  });
commander.parse(process.argv);
