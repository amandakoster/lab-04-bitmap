'use strict';

// read and write bitmap into memory
//  read and slice buffer buf.readUnit8/16/32LE
//  call bitmap methods to overwrite write

// buffer, save as property, change buffer, save buffer
const bitmap = require('../model/bitmap.js');
const fs = require('fs');

const fileOps = module.exports = {};

fileOps.read = (path, callback) => {
  fs.readFile(path, (err, data) => {
    if (err) return callback(err);
    let bmpData = new bitmap.Bitmap(data);
    callback(null, bmpData);
  });
};
// it's something like this, we have the path, the data we are writing (which is the object) and the callback which is the function we are using to overwrite the data
// sorry i chose such a dumb name, i'll change it tomorrow
// fileOps.write = (path, Bitmap, callback) => {
//   fs.writeFile(path, Bitmap.wholeEnchilada, (err) => {
//     if (err) return callback(err);
//     callback(null, Bitmap.wholeEnchilada);
//   });
// };
