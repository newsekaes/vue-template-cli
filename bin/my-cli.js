#! /usr/bin/env node

const { Command } = require('commander');
const program = new Command;
program
    .version(`my-cli ${require('../package.json').version}`)
    .usage('<command> [options]')

program
    .command('create <app-name>')
    .description('create a new project powered by my-cli-service')
    .action((name, options) => {
        require('./lib/create')(name, options);
    });
