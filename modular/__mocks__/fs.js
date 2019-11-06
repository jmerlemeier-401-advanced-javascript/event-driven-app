'use strict';

let fileContents = 'Test String';

exports.readFile = (file, cb) => {
  if (!file || file.match(/bad/i)){
    cb('invalid file'); //errorfirst callback
  } else {
    cb(undefined, new Buffer('File Content'));
  }
}

//what are the inputs for fs.writefile?
//what are the outputs?
//How does it handle errors 
exports.writeFile = (file, buffer, cb) => {
  if(file.match(/bad/i) ) {//regex, if file is bad
    cb('Invalid File');
  }
  else {
    fileContents = buffer;
    cb(undefined, fileContents);//pass back something truthy. global function
  }
};