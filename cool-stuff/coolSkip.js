module.exports= Array.prototype.skip = coolSkip;

function coolSkip(qty) {
  return this.splice(qty);
}