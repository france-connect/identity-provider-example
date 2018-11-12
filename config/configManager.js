/* eslint-disable import/no-dynamic-require */
let configPath;

if (process.env.name) {
  configPath = `./config-${process.env.name}.json`;
} else {
  configPath = './config.json';
}
const config = require(configPath);

export default config;
