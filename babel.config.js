module.exports = {
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
        ['@vue/babel-preset-jsx'],
      ],
      plugins: [
        '@babel/plugin-syntax-jsx',
        // `transform-es2015-modules-commonjs`,
      ],
    },
  },
}
