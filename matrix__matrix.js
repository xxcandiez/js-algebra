module.exports = {}

const lf = require('./list_functions.js');
const R = require('./dependencies/ramda');
/**
 * gets the column vectors of m as a new matrix object
 * @param  {[type]} l             [description]
 * @param  {Number} [n=0]         [description]
 * @param  {[type]} [ret=Array()] [description]
 * @return {[type]}               [description]
 */
let transpose = (m, n=0, ret=Array()) => {
  if (n === m.length - 1) {
    ret.push(getColumn(m, n));
    return ret;
  } else {
    ret.push(getColumn(m, n));
    return transpose(m, n+1, ret);
  }
}

let add = (m, n=0, ret=Array()) => {}

let sub = (m) => {}

let mul = (m) = {}


