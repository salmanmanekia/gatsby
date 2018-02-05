'use strict'


const fs = jest.genMockFromModule(`fs`)

let mockFiles = {}
function __setMockFiles(newMockFiles) {
  console.log(`set mock files`)
  mockFiles = Object.assign({}, newMockFiles)
}

function readFileSync(filePath, parser) {
  console.log(`Mock files`, mockFiles)
  return mockFiles[filePath]
}

fs.__setMockFiles = __setMockFiles
fs.readFileSync = readFileSync

module.exports = fs
