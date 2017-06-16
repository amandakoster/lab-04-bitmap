'use strict';

let expect = require('expect');
let bitmap = require('../model/bitmap.js');
let fileOps = require('../lib/file-ops.js');

describe('testing bitmap', () => {
  describe('grayscale function', () => {
    it('it should return the average of our data', (done) => {
      let path = './assets/bitmap.bmp';
      fileOps.read(path, (err, data) => {
        if (err)
          return console.log(err);
        console.log(data);
        bitmap.grayScale(data.colorPalette, (err, data) => {
          expect(err).toBe(null);
          expect(data).toEqual();
          done();
      )
      });
    });
  });
});
