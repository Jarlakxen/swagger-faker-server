#!/usr/bin/env node
'use strict';

const
  program = require('commander'),
  start = require('../server.js');


  program
    .usage('[options] <file>')
    .description('Swagger server with Faker integration from CLI')
    .version(require('../package').version)
    .option('-p, --port <port>', 'The server port number or socket name');

program.parse(process.argv);

// Show help if no options were given
if (program.rawArgs.length < 3) {
  program.help();
}

start(program.args[0], program);
