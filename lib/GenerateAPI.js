module.exports = class GenerateAPI {
    bindGenerator = {}
    constructor(generator) {
        this.bindGenerator = generator;
    }

    render(filePath, fileContent) {
        this.bindGenerator.fileList.push({
            path: filePath,
            content: fileContent,
        })
    }
}
