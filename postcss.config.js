const isProduction = process.env.NODE_ENV === 'production';
module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    'postcss-nested',
    'postcss-custom-properties',
    // Activa PurgeCSS en modo produccion
    [
      '@fullhuman/postcss-purgecss',
      isProduction
        ? {
            content: [
              './src/**/*.tsx',                            
            ],
            defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
            whitelistPatterns: [/flag/, /\b(\w*rccs\w*)\b/, /#card-/, /^.*\[.*('?.*'?)?\].*$/],
          }
        : false,
    ],
  ],
};