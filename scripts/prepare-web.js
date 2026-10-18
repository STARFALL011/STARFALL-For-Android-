const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const webDir = path.join(root, 'www');
const required = ['index.html', 'css', 'js', 'assets'];

for (const item of required) {
  if (!fs.existsSync(path.join(root, item))) {
    throw new Error(`Required game file/folder is missing: ${item}`);
  }
}

fs.rmSync(webDir, { recursive: true, force: true });
fs.mkdirSync(webDir, { recursive: true });
for (const item of required) {
  fs.cpSync(path.join(root, item), path.join(webDir, item), { recursive: true });
}
console.log('Web game prepared in www/ for Capacitor Android build.');
