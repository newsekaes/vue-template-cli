const Creator = require('./Creator')
async function create (projectName, options) {
    const creator = new Creator(projectName);
    await creator.create(options);
}
module.exports = (...arg) => {
    return create(...arg);
}
