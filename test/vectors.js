const F = require('mathjs').fraction
const List = require('immutable').List

const vectors = {
  z1: List([F(0)]),
  z2: List([F(0), F(0)]),
  z3: List([F(0), F(0), F(0)]),

  o1: List([F(1)]),
  o2: List([F(1), F(1)]),
  o3: List([F(1), F(1), F(1)])
}

module.exports = vectors
