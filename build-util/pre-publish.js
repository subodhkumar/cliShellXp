
const {copyFileSync, readFileSync, writeFileSync} = require('fs');
const path = require('path');
const sourcePath = path.join(__dirname,'../package.json')
const destPath = path.join(__dirname,'../package_bkp.json')
copyFileSync(sourcePath, destPath);
const packageJsonContent = readFileSync(sourcePath, 'utf8');
const packageJson = JSON.parse(packageJsonContent);
packageJson.dependencies = {};
packageJson.main = "dist/bundle.js";
writeFileSync(sourcePath, JSON.stringify(packageJson, null,`\t`),'utf8');
console.log(`# # # PRE PACK ONLY`);
console.log(`SOURCE | ${sourcePath}`);
console.log(`DEST | ${destPath}`);
