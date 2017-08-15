module.exports = {dot}
let R = require("ramda")

let dot = (v1, v2, i=0, res=0) {
  if(i > v1.length) {
    return res 
  } else {
    return dot(v1, v2, i+1, res+(v1*v2))
  }
}

let dotDefined = (v1, v2) {
  return v1.length === v2.length
}