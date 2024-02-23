const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = (async () => {
    const defaultConfig = await getDefaultConfig();
    return {
      ...defaultConfig,
      resolver: {
        assetExts: [...defaultConfig.resolver.assetExts, 'cer', 'pem'],
      },
    };
  })();

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
