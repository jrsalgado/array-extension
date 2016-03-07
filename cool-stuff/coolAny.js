
module.exports = Array.prototype.any = coolAny;

function coolAny(spec){
  var i=0,
  length = this.length,
  compare = ( spec instanceof Function )? asFunction: asValue;

  for (; i < length; i++) {
    if( compare(this[i], spec) ){
      return true;
    }
  }
  
  return false;
}

function asValue(value, spc){
  return value === spc;
}

function asFunction(value, spc){
  return spc(value);
}