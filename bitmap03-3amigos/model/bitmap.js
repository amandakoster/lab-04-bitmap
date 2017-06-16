'use strict';

//  constructor for bitmap. bitmap.js methods for transforming color array.
// * Your project should have three transforms

// const fileOps = require('../lib/file-ops.js');
// const buf = ('buf');

// constructor function to convert buffer headers data into a Javascript Object (using constructors)
const bitmap = module.exports = {};

bitmap.Bitmap = function(buffer) {
  // this.bitmapFileType = buffer.toString('utf8', 0, 2); // convert this to a string
  // this.fileSize = buffer.readInt32LE(2);
  // this.offset = buffer.readUInt32LE(10);
  // this.height = buffer.readUInt32LE(22);
  // this.width = buffer.readUInt32LE(18);
  this.colorPalette = buffer.slice(54, 1078); //1024 + 54 or this.offset is the end
  this.originalBuffer = buffer;
};

// module.exports = Bitmap;

// bitmap.invert = (data, callback) => {
//
// };
//
bitmap.grayScale = (data, callback) => {
  if (!data) { return callback(err); }
  for (let i = 0; i < data.colorPalette.length; i += 4) {
    let avg = (data[i], data[i+1], data[i+2]).reduce((a, b) => a+b)/3;
    data[i] = avg;
    data[i + 1] = avg;
    data[i + 2] = avg;
  }
  callback(null, data);
// });
};

//
// bitmap.redScale = (data, callback) => {
//
// };
//   * Invert the colors (essentially subtract every color value from the max color value which is 255),
//   * Grayscale the colors - Google it.
//   * (red|green|blue)scale the colors, same as above but only multiply one of the colors.
