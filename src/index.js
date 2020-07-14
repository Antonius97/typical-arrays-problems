
exports.min = function min (arr = []) {
  return arr.length ? Math.min(...arr) : 0;
}

exports.max = function max (arr = []) {
  return arr.length ? Math.max(...arr) : 0;
}

exports.avg = function avg (arr = []) {
  return arr.length ? arr.reduce((sum, a) => sum + a, 0) / arr.length : 0;
}
