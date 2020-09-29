'use strict'


module.exports = function (dep) {
  let cmd = {}

  cmd.command = 'general <action>'
  cmd.desc = '<action> General settings'
  // cmd.builder = yargs => yargs.commandDir('./actions')
  cmd.builder =function (yargs) {
    return yargs
    .command(require('./get')(dep))
    .command(require('./set')(dep))
    .command(require('./modify')(dep))
    .command(require('./delete')(dep))
  } 
  // cmd.builder = argv => argv.command(
  //   'action',
  //   'get set komutu',
  //   yargs => {
  //     yargs.positional('get', {type: 'string', choices : ['get','set']});
  //     // yargs.options(options)//('b', {describe: 'Disable the app builder'});
      
  //    })
    // , a=>a.options(options)).demandCommand(2,'action is needed')
  // cmd.builder = options

  cmd.handler = function (argv) {
    const { action, destination, cred } = argv
    const { log } = dep
    const message = action + (destination ? ' ' + cred : '')
    log.debug(message)
  }

  return cmd
}
