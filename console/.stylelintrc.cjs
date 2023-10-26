module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-prettier',
    'stylelint-config-recommended-less'
  ],
  // 不同格式的文件指定自定义语法
  overrides: [
    {
      files: ['**/*.(less|css|html)'],
      customSyntax: 'postcss-less'
    },
    {
      files: ['**/*.(html)'],
      customSyntax: 'postcss-html'
    }
  ],
  ignoreFiles: ['**/*.tsx', '**/*.ts', '**/*.json', '**/*.md'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind']
      }
    ]
  }
}
