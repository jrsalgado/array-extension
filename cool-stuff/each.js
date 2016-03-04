module.exports = Array.prototype.each = coolEach;
function coolEach(callback){
  var i=0,
  length = this.length;
  
  if(!callback || !(callback instanceof Function)){
    throw new Error('Array.each method needs callback function');
  }
  
  for(; i < length; i++){
      callback(this[i], i, this);
  }
  return this
}