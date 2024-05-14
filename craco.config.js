// Using CommonJS syntax in craco.config.js
const path = require('path');
const { whenProd, whenDev } = require("@craco/craco");

module.exports = {
    eslint: {
        enable: true,
        mode: 'extends'  // simplified for clarity; 'extends' is the default if unspecified
    },
    babel: {
        plugins: [
            // Add any Babel plugins here if necessary
        ]
    },
    webpack: {
        configure: (webpackConfig) => {
            const resolvedAliases = {
                '@/components': path.resolve(__dirname, 'src/components'),
                '@/styles': path.resolve(__dirname, 'src/styles'),
                '@/assets': path.resolve(__dirname, 'src/assets'),
                '@/features': path.resolve(__dirname, 'src/features'),
                '@/hooks': path.resolve(__dirname, 'src/hooks'),
                '@/lib': path.resolve(__dirname, 'src/lib'),
                '@/providers': path.resolve(__dirname, 'src/providers'),
                '@/config': path.resolve(__dirname, 'src/config'),
                '@/contexts': path.resolve(__dirname, 'src/contexts'),
                '@/stores': path.resolve(__dirname, 'src/stores'),
                '@/utils': path.resolve(__dirname, 'src/utils'),
                '@/routes': path.resolve(__dirname, 'src/routes'),
            };

            if (webpackConfig.resolve) {
                webpackConfig.resolve.alias = { ...webpackConfig.resolve.alias, ...resolvedAliases };
            } else {
                webpackConfig.resolve = { alias: resolvedAliases };
            }

            return webpackConfig;
        }
    }
};
