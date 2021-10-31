#! /usr/bin/env node

/* https://blog.csdn.net/sinat_17775997/article/details/84099731 */

const { Command, Argument } = require('commander');

const program = new Command;

program
    .command('build')
    .description('build web site for deployment')
    .action(() => {
        console.log('build');
    });

program
    .command('create')
    .argument('[name]')
    .action(name => {
        console.log('name:' + name);
    })

program
    .command('add')
    .argument('<first>', 'integer argument')
    .argument('[second]', 'integer argument', 1000)
    .action((first, second) => {
        console.log(`${first} + ${second} = ${first + second}`);
    })

program.parse();

const opts = program.opts();
