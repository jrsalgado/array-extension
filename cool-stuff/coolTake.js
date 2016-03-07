
module.exports = Array.prototype.take = coolTake;

function coolTake(qty, callback){
  var el,
    i=0,
    length = this.length,
    match=[];

  for (; i < length; i++) {
    el = this[i];
    (callback(el) === true)? match.push(el) : null;
    if(match.length >= qty){
      return match;
    }
  }

  return match;
}