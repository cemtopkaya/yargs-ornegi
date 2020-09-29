'use strict'

const { join, resolve } = require('path')
const camelCase = require('camelcase')
const requireDir = require('require-dir')
const colors = require('chalk')
const shell = require('shelljs')
// const {Certificate} = require('./lib/util/cred')

// External dependencies to pass to the commands
let dep = { join, resolve, console, colors, shell, process }

// Internal dependencies
const inDepFns = requireDir(join(__dirname, 'lib', 'modules'))
Object.keys(inDepFns).forEach(name => {
  // console.log('fonksiyon: ',name)
  dep[camelCase(name)] = inDepFns[name](dep)
})

// Load commands from folder and pass dependencies
const commandsFn = requireDir(join(__dirname, 'lib', 'commands'), { recurse: true })
// console.log('>>> commandsFn: ',commandsFn)
const commands = Object.keys(commandsFn).map((i) => commandsFn[i](dep))

// console.log('commands: ',commands)
// Export commands and modules separatelly
module.exports = { commands, modules: dep }
