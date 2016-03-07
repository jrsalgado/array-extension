/*global describe, it, before, after*/
require('../cool-stuff/coolSelect.js');

var chai = require('chai'),
sinon = require('sinon'),
should = chai.should(),
expect = chai.expect;

describe('cool select', function () {
    
  it('should select elements by name', function (done) {
    var people = [
    {name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
    {name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] },
    {name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] },
    {nickName: 'el Chato',age: 26, skills: ['RoR', 'HTML/CSS'] }
    ];
    
    people.select(byName).should.be.eql(['pedro', 'juan', 'pablo']);
    
    done();
    
    function byName(person){
      return person.name;
    }
  });
  
  it('should return people to hire', function (done) {
    var people = [
    {name: 'pedro', age: 29, skills: ['C#', 'Asp.Net', 'OOP'] },
    {name: 'juan', age: 23, skills: ['PHP', 'Drink tea'] },
    {name: 'pablo', age: 26, skills: ['RoR', 'HTML/CSS'] },
    {nickName: 'el Chato',age: 26, skills: ['RoR', 'HTML/CSS'] }
    ],
    hired;
    
    hired = people.where(function(dev){
      return !dev.skills.any(matchSkill);
    }).select(function(person){
      return person.name;
    });
    
    hired.should.be.eql(['pedro', 'pablo']);
    
    done();
    
    function matchSkill(skill) {
      return skill == 'PHP';
    }
    
  });
  
});