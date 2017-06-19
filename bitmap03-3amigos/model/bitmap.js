'use strict';

let fs = require('fs');
let bitmap = module.exports = {};

bitmap.Image = function(buffer, file) {
  this.filePath = file;
  this.buffer = buffer;
  this.header = this.buffer.slice(0, 13);
  this.dibHeader = this.buffer.slice(14, 53);
  this.colorPalette = this.buffer.slice(54, 1077);
  this.pixelArray = this.buffer.slice(1078);
};

// bitmap.Image = Image;

bitmap.read = (file, callback) => {
  fs.readFile(file, (err, data) => {
    // console.log('data in bitmap', data);
    callback(err, data);
  });
};

bitmap.Image.prototype.write = function(transformed) {
  fs.writeFile(this.filePath + `.${transformed}.bmp`, this.buffer, (err) => {
    if(err) throw err;
    console.log('Image transformed!');
  });
};

bitmap.Image.prototype.grayScale = function() {
  // if (!Array.isArray(this.colorPalette)) throw new Error;
  for (let i = 0; i < this.colorPalette.length; i += 4) {
    let gray = (this.colorPalette[i] + this.colorPalette[i+1] + this.colorPalette[i+2])/3;

    this.colorPalette[i] = gray;
    this.colorPalette[i+1] = gray; this.colorPalette[i+2] = gray;
  }
  if (this.colorPalette.length < 5) return;
  this.write('grayed');
};

bitmap.Image.prototype.invert = function() {
  // if (!Array.isArray(this.colorPalette)) throw new Error;
  for (let i = 0; i < this.colorPalette.length; i++) {
    this.colorPalette[i] = 255 - this.colorPalette[i];
  }
  if (this.colorPalette.length < 5) return;
  this.write('inverted');
};

bitmap.Image.prototype.rgBlue = function() {
  // if (!Array.isArray(this.colorPalette)) throw new Error;
  for (let i = 0; i < this.colorPalette.length; i+=4) {
    this.colorPalette[i] = 255;
  }
  if (this.colorPalette.length < 5) return;
  this.write('blued');
};
