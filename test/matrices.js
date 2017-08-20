const List = require('immutable').List

const matrices = {
  // zero matrices
  z11: List([ List([0]) ]),
  z12: List([ List([0, 0] )]),
  z13: List([ List([0, 0, 0]) ]),
  z21: List([ List([0]),
              List([0]) ]),
  z22: List([ List([0, 0]),
              List([0, 0]) ]),
  z23: List([ List([0, 0, 0]),
              List([0, 0, 0]) ]),
  z32: List([ List([0, 0]),
              List([0, 0]),
              List([0, 0]) ]),
  z31: List([ List([0]),
              List([0]),
              List([0]) ]),
  z33: List([ List([0, 0, 0]),
              List([0, 0, 0]),
              List([0, 0, 0])]),
  z34: List([ List([0, 0, 0, 0]),
              List([0, 0, 0, 0]),
              List([0, 0, 0, 0]) ]),
  z43: List([ List([0, 0, 0]),
              List([0, 0, 0]),
              List([0, 0, 0]),
              List([0, 0, 0])]),
  // identity matrices
  i11: List([ List([1]) ]),
  i22: List([ List([1, 0]),
              List([0, 1]) ]),
  i33: List([ List([1, 0, 0]),
              List([0, 1, 0]),
              List([0, 0, 1]) ]),
  s33: List([ List([0, 1, 2]),
              List([3, 4, 5]),
              List([6, 7, 8])]),
  s34: List([ List([0, 1, 2, 3]),
              List([4, 5, 6, 7]),
              List([8, 9, 10, 11]) ]),
  s43: List([ List([0, 1, 2]),
              List([3, 4, 5]),
              List([6, 7, 8]),
              List([9, 10, 11]) ])
}

module.exports = matrices
