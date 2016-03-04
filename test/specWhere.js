/*global describe, it, before, after*/
var coolWhere = require('../cool-stuff/coolWhere.js'),
chai = require('chai'),
sinon = require('sinon'),
should = chai.should(),
expect = chai.expect;

describe('cool Each', function () {
  
  it('this should work', function () {
        var x = [1,2].where(function(el){
          return el == 1;
        });
        console.log(x);
  });
});