const path = require('path')

const buildEslintCommand = (filenames) =>
  `yarn lint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')} --fix`

const prettier = (filenames) => `yarn prettier --write ${filenames.join(' ')}`

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand, prettier],

  '**/*.{json}': [prettier]
}
