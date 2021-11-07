#! /usr/bin/env node

/* https://blog.csdn.net/sinat_17775997/article/details/84099731 */

const { Command, Argument } = require('commander');
const inquirer = require('inquirer');

const program = new Command;

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

program
    .command('talk')
    .action(async () => {
        const { name, operator, work } = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: '你好，博士，欢迎第一次来到罗德岛，请回忆您的名字：',
                default: 'Doctor',
            },
            {
                type: 'list',
                name: 'operator',
                message: ({ name }) => `Dr.${name}, 您希望选择下列哪位干员从事您的贴身秘书：`,
                choices: [
                    '阿米娅',
                    '白金',
                    '砾',
                    '蓝毒',
                    '安洁莉娜'
                ],
            },
            {
                type: 'list',
                name: 'work',
                message: ({ name, operator }) => `Dr.${name}, 您希望${operator}辅助您进行何种工作？`,
                choices: [
                    { name: '负责战斗支援和战术献策' },
                    { name: '文件装订、打印等文书工作' },
                    { name: '博士的伙食管理' },
                    { name: '在博士旁边安心坐着就好', short: '吉祥物' },
                ],
            },
        ]);
        console.log(`Dr.${name}, 干员${operator}将如下辅助您：${work}`);
    })

program.parse();
