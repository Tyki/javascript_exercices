
const letconst = require('./letconst')
const arrow = require('./arrow')
const array = require('./array')

let example = function () {

  function start () {
    // EX1
    // letconst.exo1();
    // letconst.checkHoisting();

    // EX2
    // arrow.exo2();
    //
    // EX3
    array.exo3();
  }

  this.start = start;

    return this;
}

module.exports = new example ();
