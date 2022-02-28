/**
 * Created by star on 17/03/31 0031.
 */
module.exports = function merge () {
  var args = Array.prototype.slice.call(arguments, 0),
    src = args[0],
    dists = args.slice(1);
  if (args.length < 2) {
    return src;
  }
  for (var i = 0, len = dists.length; i < len; ++i) {
    for (var key in dists[i]) {
      if (dists[i].hasOwnProperty(key)) {
        if (Object.prototype.toString.call(dists[i][key]) === '[object Object]') {
          !src[key] && (src[key] = {});
          merge(src[key], dists[i][key]);
        } else {
          src[key] = dists[i][key];
        }
      }
    }
  }
  return src;
};
