/*global describe, it, before, after*/
require('../cool-stuff/coolAny.js');

var chai = require('chai'),
sinon = require('sinon'),
should = chai.should(),
expect = chai.expect;

describe('cool any', function () {
  
  it('this evaluate on value spec', function (done) {
    [1,2,4,5,6,7,8,9,10].any(6).should.be.true;
    [1,2,4,5,6,7,8,9,10].any(0).should.be.false;
    
    ['a','b','c'].any('b').should.be.true;
    ['a','b','c'].any('d').should.be.false;
    
    ['a',true,'c'].any(true).should.be.true;
    ['a',true,'c'].any(false).should.be.false;
    
    done();
  });
  
  it('this evaluate as callback', function (done) {
    
    [1,2,4,5,6,7,8,9,10].any(evenNumber).should.be.true;
    [1,3,5,7,9].any(evenNumber).should.be.false;
    
    function evenNumber(num){
      return !(num%2);
    }
    done();
  });
  
  it('should hire people without PHP skills as value', function (done) {
    var people = [
    {name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
    {name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] },
    {name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
    ],
    hired = [];
    
    hired = people.where(function(dev){
      return !dev.skills.any('PHP');
    });
    
    hired.should.be.an('array').with.length(2);
    hired.should.have.deep.property('[0].name', 'pedro');
    hired.should.have.deep.property('[1].name', 'pablo');

    done();
  });
  
  it('should hire people without PHP skills as callback', function (done) {
    var people = [
    {name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
    {name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] },
    {name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
    ],
    hired = [];
    
    hired = people.where(function(dev){
      return !dev.skills.any(matchSkill);
    });
    
    hired.should.be.an('array').with.length(2);
    hired.should.have.deep.property('[0].name', 'pedro');
    hired.should.have.deep.property('[1].name', 'pablo');
    done();
    
    function matchSkill(skill) {
      return skill == 'PHP';
    }
    
  });
});