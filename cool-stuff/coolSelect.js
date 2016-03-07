
module.exports = Array.prototype.select = coolSelect;

function coolSelect(callback){
  var el,
    i=0,
    length = this.length,
    selected=[]; 
    
  for (; i < length; i++) {
    
    el = callback(this[i]);
    if( el !== undefined ){
     selected.push(el);
    }
    
  }
  
  return selected;
}