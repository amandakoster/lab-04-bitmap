'use strict';

//  takes file path using process.argv.splice(2),
//  call files-ops to read file
//  do logic in file.ops and bitmap gets sliced because it uses the reference
//  hardcode transforms bmp pictures and writes image to output path

const fileOps = require('./lib/file-ops.js');

let fileContents = module.exports = () => {
  let results = fileOps.read(process.argv.slice(2), (err, data) => {
    if(err){
      console.log(`
        |             YOU FAIL
        |            TRY AGAIN`);
      // callback(err);
      return;
    }
    console.log(data);
  });
  return results;
};

fileContents();
