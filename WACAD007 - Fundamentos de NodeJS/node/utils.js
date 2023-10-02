function createLink(dir, filename) {
    return `<a href="/${dir}/${filename}">${filename}</a><br>\n`;
}

module.exports = createLink