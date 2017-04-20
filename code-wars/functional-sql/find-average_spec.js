require('../support');
var E = require('./find-average');
var assert = require("chai").assert;

describe("Find average", function(){

  it('Ones', function(){
    assert.deepEqual(find_average([1,1,1]), 1);
  });

  it('One, Two, Three', function(){
    assert.deepEqual(find_average([1,2,3]), 2);
  });

});
