const fs = require('fs')
const Path = require('path')
const GenerateAPI = require('./GenerateAPI');

module.exports = class Generator {
    fileList = [];
    constructor(name) {
        // 拿到name对应的组件，绑定generateAPI
        const pluginGenerate = require(`../resource/plugin-${name}/generate.js`);
        pluginGenerate(new GenerateAPI(this));
    }
    generate(rootPath) {
        this.fileList.forEach(({ path, content }) => {
            fs.mkdirSync(Path.resolve(rootPath, path), { recursive: true });
            fs.writeFileSync(Path.resolve(rootPath, path), content)
        })
    }
}
