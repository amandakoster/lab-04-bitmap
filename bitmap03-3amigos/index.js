'use strict';

let bitmap = require('./model/bitmap.js');

let index = module.exports = {};

index.grayImg = (file) => {
  bitmap.read(file, (err, data) => {
    let img = new bitmap.Image(data, file);
    img.grayScale();
  });
};

index.invertImg = (file) => {
  bitmap.read(file, (err, data) => {
    let img = new bitmap.Image(data, file);
    img.invert();
  });
};

index.blueImg = (file) => {
  bitmap.read(file, (err, data) => {
    let img = new bitmap.Image(data, file);
    img.rgBlue();
  });
};
//
index.grayImg(process.argv[2]);

index.invertImg(process.argv[2]);

index.blueImg(process.argv[2]);
