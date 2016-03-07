/*global describe, it, before, after*/
require('../cool-stuff/coolFirst.js');

var chai = require('chai'),
sinon = require('sinon'),
should = chai.should(),
expect = chai.expect;

describe('cool first', function () {
    
  it('should return first children with spec as number', function (done) {
    
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
    firstChildren = {name: 'ana', sex: 'f'};
      
      children.first(1)
      .should.be.deep.equal(firstChildren);
      
      done();
  });
  
  it('should return first children with spec as callback', function (done) {
    
    var children = [
      {name: 'ana', sex: 'f'},
      {name: 'fosto', sex: 'm'},
      {name: 'jane', sex: 'f'},
      {name: 'yadi', sex: 'f'},
      {name: 'lili', sex: 'f'},
      {name: 'bany', sex: 'm'},
      {name: 'rod', sex: null},
      {name: 'auro', sex: 'f'},
      {name: 'martin', sex: 'm'}];
      
      children.first(function(x){ return x.sex === 'm'}).name
      .should.be.equal('fosto');
      
      done();
  });
  
});