'use strict';

let expect = require('expect');
let bitmap = require('../model/bitmap.js');

describe('testing transformation', () => {
  describe('grayScale function', () => {
    it('it should return the average of our color palette data', () => {
      let img = new bitmap.Image([241, 45, 185, 55], null);
      img.colorPalette = img.buffer;
      img.grayScale();
      expect(img.buffer).toEqual([157, 157, 157, 55]);
    });
    it('should throw an error', () => {
      let img = new bitmap.Image([241, 45, 185, 55], null);
      img.colorPalette = 'Soli';
      expect(() => img.grayScale()).toThrow(Error);
    });
  });

  describe('invert function', () => {
    it('it invert the data in the color palette array', () => {
      let img = new bitmap.Image([241, 45, 185, 55], null);
      img.colorPalette = img.buffer;
      img.invert();
      expect(img.buffer).toEqual([14, 210, 70, 200]);
    });
    it('should throw an error', () => {
      let img = new bitmap.Image([241, 45, 185, 55], null);
      img.colorPalette = 'Deo';
      expect(() => img.grayScale()).toThrow(Error);
    });
  });

  describe('rgBlue function', () => {
    it('it should set the data for blue to 255', () => {
      let img = new bitmap.Image([241, 45, 185, 55], null);
      img.colorPalette = img.buffer;
      img.rgBlue();
      expect(img.buffer).toEqual([255, 45, 185, 55]);
    });
    it('should throw an error', () => {
      let img = new bitmap.Image([241, 45, 185, 55], null);
      img.colorPalette = 'Gloria';
      expect(() => img.grayScale()).toThrow(Error);
    });
  });

});
