'use strict';

//  constructor for bitmap. bitmap.js methods for transforming color array.
// * Your project should have three transforms


const fileOps = require('../lib/file-ops.js');

// constructor function to convert buffer headers data into a Javascript Object (using constructors)

function Bitmap(buffer) {
  this.bitmapFileHeader = buf.slice(0, 14)
  // based on header data slice these other things
  // read the 2 bits we sliced with readun16le and .tostring it
  // read the file with readUint32le
  // read header data to put dibheader and color table where we want
  this.dibHeader = buffer.slice the parts we want
  this.colorTable = buffer.slice the parts we want
  this.pixelArray = buffer.slice the parts we want
}

//   * Invert the colors (essentially subtract every color value from the max color value which is 255),
//   * Grayscale the colors - Google it.
//   * (red|green|blue)scale the colors, same as above but only multiply one of the colors.
