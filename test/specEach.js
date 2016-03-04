/*global describe, it, before, after*/
var coolEach = require('../cool-stuff/each.js'),
chai = require('chai'),
sinon = require('sinon'),
should = chai.should(),
expect = chai.expect;

describe('cool Each', function () {
  before(function(done){
    Array.prototype.each = coolEach;
    done();
  });
  
  it('should be a function', function (done) {
    coolEach.should.be.a('function');
    done();
  });
  
  it('should throw an error if calling Array.each without callback param', function (done) {
    expect([1,2,3,4,5,6,7,8,9,10].each).to.throw(Error);
    done();
  });
  
  it('should throw an error if calling Array.each if callback is not a function', function (done) {
    var notaFunction = "notaFunction";
    expect([1,2,3,4,5,6,7,8,9,10].each.bind(Array, notaFunction)).to.throw(Error);
    done();
  });
  
  it('should works with Array objects', function (done) {
    function cb(){return null};
    [1,2,3,4,5,6,7,8,9,10].each(cb).should.be.an('array');
    done();
  });
  
  it('should call callback Array.length times', function(done){
    var cb = sinon.spy();
    [1,2,3,4,5,6,7,8,9,10].each(cb);
    cb.callCount.should.be.equals(10);
    done();
  });
  
});