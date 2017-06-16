'use strict';

//  takes file path using process.argv.splice(2),
//  call files-ops to read file
//  do logic in file.ops and bitmap gets sliced because it uses the reference
//  hardcode transforms bmp pictures and writes image to output path

const fileOps = require('./lib/file-ops.js');

let filePaths = ['./assets/bitmap.bmp', './assets/finger-print.bmp', './assets/house.bmp', './assets/newpicpls.bmp', './assets/non-palette-bitmap.bmp'];

let fileContents = module.exports = () => {
  let results = fileOps.read(process.argv[2], (err, data) => {
    if (err)
      return console.log(err);
    console.log(data);
  });
};

fileContents();

//  we're goign to ahve to run this for every file and every bitmap yeah?
