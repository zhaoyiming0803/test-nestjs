const fs = require('fs')
const execa = require('execa')
const run = (bin, args, opts = {}) => execa.sync(bin, args, { stdio: 'inherit', ...opts })

const tsconfig = require('../tsconfig.json')
tsconfig.compilerOptions.strictNullChecks = false

tsconfig.files = [
  'src/city/city.controller.ts'
]
fs.writeFileSync('tsconfig.temp.json', JSON.stringify(tsconfig, null, 2), 'utf8')

try {
  run('tsc', ['--project', 'tsconfig.temp.json'])
} catch (e) {
  console.error('custom tsc compiler error: ', e)
} finally {
  fs.unlinkSync('tsconfig.temp.json')
}
