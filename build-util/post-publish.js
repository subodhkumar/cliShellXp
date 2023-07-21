
const {copyFileSync, readFileSync, writeFileSync, renameSync} = require('fs');
const path = require('path');
const sourcePath = path.join(__dirname,'../package_bkp.json')
const destPath = path.join(__dirname,'../package.json')
renameSync(sourcePath, destPath);
console.log(`# # # POST PACK ONLY`);
console.log(`SOURCE | ${sourcePath}`);
console.log(`DEST | ${destPath}`);
