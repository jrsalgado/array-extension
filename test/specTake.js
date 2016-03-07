/*global describe, it, before, after*/
require('../cool-stuff/coolTake.js');

var chai = require('chai'),
sinon = require('sinon'),
should = chai.should(),
expect = chai.expect;

describe('cool Take', function () {
    
  it('should select the first three girls', function (done) {
    
    var children = [
      {name: 'ana', sex: 'f'},
      {name: 'fosto', sex: 'm'},
      {name: 'jane', sex: 'f'},
      {name: 'yadi', sex: 'f'},
      {name: 'lili', sex: 'f'},
      {name: 'bany', sex: 'm'},
      {name: 'rod', sex: null},
      {name: 'auro', sex: 'f'},
      {name: 'martin', sex: 'm'}],
    threeFemales = [
      {name: 'ana', sex: 'f'},
      {name: 'jane', sex: 'f'},
      {name: 'yadi', sex: 'f'}];
      
      children.take(3, function(x){ return x.sex == 'f';})
      .should.be.deep.equal(threeFemales);
      
      done();
  });
  
});