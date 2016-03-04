
module.exports = Array.prototype.where = coolWhere;

function coolWhere(callback){
  var el,i=0, length = this.length, match=[];
  
  for (; i < length; i++) {
    el = this[i];
    (callback(el) === true)? match.push(el) : null;
  }
  
  return match;
}