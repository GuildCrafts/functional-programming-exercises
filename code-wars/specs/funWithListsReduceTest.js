var mocha = require('mocha')
var assertEquals = require('chai').assertEquals
var E = require('../src/funWithListsReduce.js')

describe.only("reduce", function() {

  it("basic tests", function() {
    Test.assertEquals(reduce(null, (a, b) => a + b, 0), 0);
    Test.assertEquals(reduce(new Node(1, new Node(2, new Node(3))), (a, b) => a + b, 0), 6);
    Test.assertEquals(reduce(new Node(1, new Node(2, new Node(3, new Node(4)))), (a, b) => a * b, 1), 24);
    Test.assertEquals(reduce(new Node('a', new Node('b', new Node('c'))), (a, b) => a + b, ''), 'abc');
  });

});
