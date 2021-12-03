const Path = require('path')
const Generator = require('./Generator');

module.exports = class Creator {
    generatorList = []
    path = '/'
    constructor(pathName) {
        this.path = Path.resolve(process.cwd(), pathName);
    }
    create(options) {
        options.forEach(({ name }) => {
            this.generatorList.push(new Generator(name));
        })
        this.generatorList.forEach(generator => {
            generator.generate(this.path);
        })
    }
}
