'use strict';

let expect = require('expect');
let fileOps = require('../lib/file-ops.js');
console.log('line5');

describe('testing file-ops', () => {
  it('it should print a buffer', (done) => {
    let path = ('./test/dummy-test.txt');
    fileOps.read(path, (err, data) => {
      expect(err).toBe(null);
      expect(data.toString()).toEqual('this is dummy data\n');
      done();
    });
  });
});
