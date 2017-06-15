'use strict';

// read and write bitmap into memory
//  read and slice buffer buf.readUnit8/16/32LE
//  call bitmap methods to overwrite write

// buffer, save as property, change buffer, save buffer

const fileOps = module.exports = {};
const fs = require('fs');

fileOps.read = () => {
  // open file using fs and read it into a buffer
  fs.readFile(path, (err, data) => {
    if (err)
    // do something with err
      return;
    // do soemthing with data/buffer
  })
};

fileOps.write = () => {
  // writeUint8 stuff to overwrite it
  //  call bitmap.js functions to change the file.

};
