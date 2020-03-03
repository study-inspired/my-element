const fs = require('fs-extra');
const concat = require('concat');

concatenate = async () => {
  const path = './dist/my-element/';
  const filesES2015 = [
    `${path}runtime-es2015.js`,
    `${path}polyfills-es2015.js`,
    `${path}main-es2015.js`,
  ];

  const filesES5 = [
    `${path}runtime-es5.js`,
    `${path}polyfills-es5.js`,
    `${path}main-es5.js`,
  ];
  await fs.ensureDir('output');
  await concat(filesES2015, 'output/my-element-es2015.js');
  await concat(filesES5, 'output/my-element-es5.js');
};
concatenate();
