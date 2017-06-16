'use strict';

//  constructor for bitmap. bitmap.js methods for transforming color array.
// * Your project should have three transforms

// const fileOps = require('../lib/file-ops.js');
// const buf = ('buf');

// constructor function to convert buffer headers data into a Javascript Object (using constructors)

function Bitmap (buffer) {
  this.bitmapFileType = buffer.toString('utf8', 0, 2); // convert this to a string

  this.fileSize = buffer.readInt32LE(2);
  this.offset = buffer.readUInt32LE(10);
  this.height = buffer.readUInt32LE(22);
  this.width = buffer.readUInt32LE(18);
  this.colorPalette = buffer.slice(54, this.offset); //1024 + 54 or this.offset is the end
  this.wholeEnchilada = buffer;
}


//   * Invert the colors (essentially subtract every color value from the max color value which is 255),
//   * Grayscale the colors - Google it.
//   * (red|green|blue)scale the colors, same as above but only multiply one of the colors.
