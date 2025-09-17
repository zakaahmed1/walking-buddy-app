const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.alias = {
  "@": __dirname,                     // 👈 root alias
  "@components": "./app/components",
  "@screens": "./app/screens",
  "@services": "./src/services",
  "@constants": "./constants",
  "@hooks": "./hooks"
};

module.exports = config;
