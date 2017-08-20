const assert = require('chai').assert
const describe = require('mocha').describe
const it = require('mocha').it
const List = require('immutable').List
const vv = require('../src/vector__vector.js')
const vectors = require('./vectors.js')

describe('vv.add', function() {
  describe('it performs mathematical vector addition on two vectors (v1, v2)', function() {
    it('z1:[0] + z1:[0] = [0]', function() {
      assert(vv.add(vectors.z1, vectors.z1).equals(List([0])))
    }),
    it('z1:[0] + o1:[1] = [1]', function() {
      assert(vv.add(vectors.z1, vectors.o1).equals(List([1])))
    }),
    it('o3:[1, 1, 1] + o3:[1, 1, 1] = [2, 2, 2]', function() {
      assert(vv.add(vectors.o3, vectors.o3).equals(List([2, 2, 2])))
    })
  })
})

describe('vv.sub', function() {
  describe('it perfoms mathematical vector subtraction on two vectors v1 - v2', function() {
    it('z1:[0] - z1:[0] = [0]', function(){
      assert(vv.sub(vectors.z1, vectors.z1).equals(List([0])))
    }),
    it('z1:[0] - o1:[1] = [-1]', function(){
      assert(vv.sub(vectors.z1, vectors.o1).equals(List([-1])))
    }),
    it('o1:[1] - z1:[0] = [1]', function(){
      assert(vv.sub(vectors.o1, vectors.z1).equals(List([1])))
    }),
    it('o3:[1, 1, 1] - o3:[1, 1, 1] = [0, 0, 0]', function(){
      assert(vv.sub(vectors.o3, vectors.o3).equals(List([0, 0, 0])))
    })
  })
})

describe('vv.scale', function() {
  describe('it performs scalar multiplication on a vector', function() {
    it('3*z1:[0] = [0]', function() {
      assert(vv.scale(vectors.z1, 3).equals(List([0])))
    }),
    it('0*o1:[1] = [0]', function() {
      assert(vv.scale(vectors.o1, 0).equals(List([0])))
    }),
    it('-1*o1:[1] = [-1]', function() {
      assert(vv.scale(vectors.o1, -1).equals(List([-1])))
    }),
    it('5*o3:[1, 1, 1] = [5, 5, 5]', function() {
      assert(vv.scale(vectors.o3, 5).equals(List([5, 5, 5])))
    })
  })
})
