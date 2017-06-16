'use strict';

// read and write bitmap into memory
//  read and slice buffer buf.readUnit8/16/32LE
//  call bitmap methods to overwrite write

// buffer, save as property, change buffer, save buffer

const fs = require('fs');

const fileOps = module.exports = {};

fileOps.read = (path, callback) => {

  // let results = [];
  fs.readFile(path, (err, data) => {
    if (err) return callback(err);
    // results.push(data);
    callback(null, data);
  });
};

// fileOps.write = () => {
  // writeUint8 stuff to overwrite it
  //  call bitmap.js functions to change the file.

// };
