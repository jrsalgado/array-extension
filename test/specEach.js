/*global describe, it, before, after*/
var coolEach = require('../cool-stuff/each.js'),
chai = require('chai'),
sinon = require('sinon'),
should = chai.should(),
expect = chai.expect;

describe('cool Each', function () {
    
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
  
  it('should call callback with value and index as params', function(done){
    var arr = [1,2], cb = sinon.spy();
    arr.each(cb);

    cb.calledTwice.should.be.equals.true;
    cb.firstCall.calledWith(1, 0, arr).should.be.true;
    cb.secondCall.calledWith(2, 1, arr).should.be.true;

    done();
  });
  
  it('should console the magic!!!', function(done){
    var txts, people, expectedTxts;
      
    txts = [];
    
    people = [
      {name: 'king slayer', age: 40 },
      {name: 'king jeofrey', age: 15 },
      {name: 'jon snow', age: 23 },
      {name: 'sansa', age: 16 },
      {name: 'little finger', age: 45}];
      
   expectedTxts = [ 
     '1.­ king slayer is 40 years old',
     '2.­ king jeofrey is 15 years old',
     '3.­ jon snow is 23 years old',
     '4.­ sansa is 16 years old',
     '5.­ little finger is 45 years old' ];
  
      people.each(function(x, i){
        txts.push((i + 1) + '.­ ' + x.name + ' is ' + x.age + ' years old');
      });
      txts.should.be.deep.equal(expectedTxts);
      done();
  });
  
});