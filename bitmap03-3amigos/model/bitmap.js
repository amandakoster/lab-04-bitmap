'use strict';

let fs = require('fs');
let bitmap = module.exports = {};

function Image(buffer, file) {
  this.filePath = file;
  this.buffer = buffer;
  this.colorPalette = this.buffer.slice(54, 1078);
}

bitmap.Image = Image;

bitmap.read = (file, callback) => {
  fs.readFile(file, (err, data) => {
    console.log('data in bitmap', data);
    // if (err) return callback(err);
    callback(err, data);
  });
};

bitmap.Image.prototype.write = function(transformed) {
  fs.writeFile(this.filePath + `.${transformed}.bmp`, this.buffer, (err) => {
    if(err) throw err;
    console.log('File written!');
  });
};

bitmap.Image.prototype.grayScale = function() {
  // if (!Array.isArray(this.colorPallete))
  //   throw new Error;
  for (let i = 0; i < this.colorPalette.length; i += 4) {
    let gray = (this.colorPalette[i] + this.colorPalette[i+1] + this.colorPalette[i+2])/3;

    this.colorPalette[i] = gray;
    this.colorPalette[i+1] = gray; this.colorPalette[i+2] = gray;
  }
  this.write('grayed');
};

bitmap.Image.prototype.invert = function() {
  for (let i = 0; i < this.colorPalette.length; i++) {
    this.colorPalette[i] = 255 - this.colorPalette[i];
  }
  this.write('inverted');
};

bitmap.Image.prototype.rgBlue = function() {
  for (let i = 0; i < this.colorPalette.length; i+=4) {
    this.colorPalette[i] = 255;
  }
  this.write('blued');
};
