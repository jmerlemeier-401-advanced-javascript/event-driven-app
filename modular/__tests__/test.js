'use strict';

//creates a mock module of node modules like js or buffer. grab raeder and describe what test shoudl be doing.

jest.mock('fs');

const fileEdit = require('../lib/file-edit-callback');

//======== CALLBACK TEST ===========
describe('test file handler', () => {

  it ('writes to a file using a callback', () => {
    fileEdit.writer('test.json', {name: test}, (err, data) => {
      expect(err).not.toBeDefined();
      expect(data).toBeDefined();
    });
  });

  it ('defines err with bad path', () => {
    fileEdit.writer('bad.txt', {name: test}, (err, data) => {
      expect(err).toBe('Invalid File');
      expect(data).not.toBeDefined();
    });
  });
});