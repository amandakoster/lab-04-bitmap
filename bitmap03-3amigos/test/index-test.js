'use strict';

let expect = require('expect');
let index = require('.index.js');
// console.log('line5');

describe('testing index', () => {
  it('it should convert image file into an object', (done) => {
    let path = './assets/bitmap.bmp';
    index.read(path, (err, data) => {
      expect(err).toBe(null);
      expect(data.buffer.toString().slice(0, 2)).toEqual('BM');
      done();
    });
  });
});

// let grayImg = (file) => {
//   bitmap.read(file, (err, data) => {
//     // console.log('data in index', data);
//     let img = new bitmap.Image(data, file);
//     console.log(img);
//     img.grayScale();
//   });
// };
