/**
* 金额的格式化
* */

module.exports = function (money, isInteger) {
  if (typeof money === 'undefined' || money === '') return '--';
  let v = (money * 1 / 100).toFixed(2);
  isInteger && (v = v.toString().replace(/\.0{2}$/, ''));
  return v;
};
