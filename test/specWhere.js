/*global describe, it, before, after*/
var coolWhere = require('../cool-stuff/coolWhere.js'),

chai = require('chai'),
sinon = require('sinon'),
should = chai.should(),
expect = chai.expect;

describe('cool where', function () {
  
  it('this return the even numbers', function () {
    var x = [1,2,3,4,5,6,7,8,9,10].where(function(num){
          return !(num % 2);
    });
    
    x.should.be.eql([2,4,6,8,10]);
    
  });
  
  it('should hire people without PHP skills', function () {
    var people = [
    {name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
    {name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] },
    {name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] }
    ],
    hired = [];
    
    hired = people.where(function(dev){
      return dev.skills.where( matchSkill ).length == 0;
    });
    
    hired.should.be.an('array').with.length(2);
    hired.should.have.deep.property('[0].name', 'pedro');
    hired.should.have.deep.property('[1].name', 'pablo');
    
    function matchSkill(skill) {
      return skill == 'PHP';
    }
    
  });
});