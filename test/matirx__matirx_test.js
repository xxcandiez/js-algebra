const assert = require('chai').assert
const List = require('immutable').List
const matrices = require('./matrices.js')
const mm = require('../src/matrix__matrix.js')

describe('mm.transpose', function() {
  describe('applies matrix transpose', function() {
    it('can transpose a 1x1 matrix into itself', function() {
      assert(mm.transpose(matrices.z11).equals(matrices.z11))
    }),
    it('can transpose an identity matrix into itself', function() {
      assert(mm.transpose(matrices.i33).equals(matrices.i33))
    }),
    it('can transpose an arbitrary nxm matrix', function() {
      const l = List([ List([0, 4, 8]),
                       List([1, 5, 9]),
                       List([2, 6, 10]),
                       List([3, 7, 11]) ])

      assert(mm.transpose(matrices.s34).equals(l))
    })
  })
})

describe('mm.add', function() {
  describe('computes matrix addition', function() {
    it('can add two 1x1 matrices', function() {
      const l = List([ List([2]) ])
      assert(mm.add(matrices.o11, matrices.o11).equals(l))
    }),
    it('can add two 1x1 matrices', function() {
      const l = List([ List([1]) ])
      assert(mm.add(matrices.z11, matrices.o11).equals(l))
    }),
    it('can add two nxm matrices', function() {
      const l = List([ List([0, 2, 4, 6]),
                       List([8, 10, 12, 14]),
                       List([16, 18, 20, 22]) ])
      assert(mm.add(matrices.s34, matrices.s34).equals(l))
    })
  })
})

describe('mm.sub', function() {
  describe('computes matrix subtraction', function() {
    it('can add two 1x1 matrices', function() {
      const l = List([ List([0]) ])
      assert(mm.sub(matrices.o11, matrices.o11).equals(l))
    }),
    it('can add two 1x1 matrices', function() {
      const l = List([ List([-1]) ])
      assert(mm.sub(matrices.z11, matrices.o11).equals(l))
    }),
    it('can add two nxm matrices', function() {
      const l = List([ List([0, 0, 0, 0]),
                       List([0, 0, 0, 0]),
                       List([0, 0, 0, 0]) ])
      assert(mm.sub(matrices.s34, matrices.s34).equals(l))
    })
  })
})

describe('mm.mul', function() {
  describe('can multiply 1x1 and 1x1 matrices', function() {
    it('[[1]]*[[5]] = [[5]]', function() {
      const m5 = List([List([5])])
      const l = List([List([5])])
      assert(mm.mul(matrices.o11, m5).equals(l))
    })
  }),
  describe('can multiply 3x1 and 1x3 matrices', function() {
    it('1x3 * 3x1', function() {
      const l = List([List([5])])
      assert(mm.mul(matrices.s13, matrices.s31).equals(l))
    }),
    it('1x3 * 3x1', function() {
      const l = List([List([0, 0, 0]),
                      List([0, 1, 2]),
                      List([0, 2, 4])])
      assert(mm.mul(matrices.s31, matrices.s13).equals(l))
    })
  }),
  describe('can multiply 3x4 and 4x3 matrices', function() {
    it('3x4 * 4x3', function() {
      const l = List([List([42, 48, 54]),
                      List([114, 136, 158]),
                      List([186, 224, 262])])
      assert(mm.mul(matrices.s34, matrices.s43).equals(l))
    }),
    it('4x3 * 3x4', function() {
      const l = List([List([20, 23, 26, 29]),
                      List([56, 68, 80, 92]),
                      List([92, 113, 134, 155]),
                      List([128, 158, 188, 218])])
      assert(mm.mul(matrices.s43, matrices.s34).equals(l))
    })
  })
})