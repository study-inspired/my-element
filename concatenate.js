const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () => {
  const path = './dist/my-element/';
  const files = [
    `${path}runtime-es5.js`,
    `${path}runtime-es2015.js`,
    `${path}polyfills-es5.js`,
    `${path}polyfills-es2015.js`,
    `${path}main-es5.js`,
    `${path}main-es2015.js`,
  ];

  await fs.ensureDir('output');
  await concat(files, 'output/my-element.js');
};
concatenate();
