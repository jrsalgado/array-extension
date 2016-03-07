module.exports= Array.prototype.first = ultraFirst;

function ultraFirst(spec){
  var fn;
  
  fn = ( !isNaN(spec) )? coolFirstQty :
        (spec instanceof Function)? coolFirstCb :null;

  return fn(this,spec);
}

function coolFirstQty(arr, spec) {
  return arr.splice(0)[0];
}

function coolFirstCb(arr ,cb) {
  var i=0,
  length = arr.length;

  for (; i < length; i++) {
    if( cb(arr[i]) ){
      return arr[i];
    }
  }
}