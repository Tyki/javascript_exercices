var workshop =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	
	const letconst = __webpack_require__(2)
	const arrow = __webpack_require__(3)
	const array = __webpack_require__(4)

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


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

	/**
	 * @namespace
	 */
	 function file1 () {

	   this.exo1 = function() {
	     var varExample = {
	       value: "var example"
	     }
	     let letExample = {
	       value: "let example"
	     }
	     const constExample = {
	       value: "const example"
	     }

	     console.log(varExample, letExample, constExample)

	     console.log('Trying to mutate these variables (without reassignate)')
	     varExample.value = 'var Example modified'
	     letExample.value = 'let Example modified'
	     constExample.value = 'My new value!! inside a const'
	     console.log(varExample, letExample, constExample)

	     console.log('Trying to reassignate these variables')
	      varExample = {
	        value: "new Var value "
	      }

	      letExample  = {
	        value: "new let value"
	      }
	      // Build failing, const is read only
	      // constExample = {
	      //   value: 'new const value'
	      // }
	      console.log(varExample, letExample, constExample)

	      console.log('trying to redeclarate the variable')
	      var varExample = {
	        value: "finally a varValue"
	      }

	      // Build failed
	      let letValue = {
	        value: "finally a letValue"
	      }

	      // Const cannot be redeclarate, we saw that earlier
	      console.log(varExample, letExample, constExample)
	      /**/
	   }

	   this.checkHoisting = function () {
	     console.log('Now checking the hoisting with var')
	     console.log(typeof foo);
	     var foo = 'baz'

	     console.log(typeof bar);
	     let bar = 'bar'
	    //  console.log(typeof bar);
	   }

	  return this;
	}

	module.exports = new file1();


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/**
	 * @namespace
	 */
	 function file2 () {

	   this.exo2 = function() {
	     console.log('checking scope of arrow functions')

	     var that = this
	     console.log('Scope of function')
	     console.log(this)

	     console.log('callback with function')
	     console.log("")

	     $('.myClass').each(function (index, element) {
	       console.log("index : " + index) // Should probably be the index of element selected by jQuery
	       console.log("Element")
	       console.log(element)
	       console.log('This : ')
	       console.log(this)
	       console.log(this === that)
	       console.log('-----------------')
	     })

	     console.log('')
	     console.log('callback with arrow function')
	     console.log('')
	     $('.myClass').each( (index, element) => {
	       console.log("Index : " + index)
	       console.log("Element : ")
	       console.log(element)
	       console.log('This : ')
	       console.log(this)
	       console.log(this === that)

	       console.log('-----------------')
	     })
	   }

	  return this;
	}

	module.exports = new file2();


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	/**
	 * @namespace
	 */
	 function file3 () {

	   this.exo3 = function() {
	     let list = [
	       {name: 'mojito', price: 8},
	       {name: 'restaurant', price: 100},
	       {name: 'condom' , price: 15},
	       {name: 'a good night', price: 0}
	     ];

	     console.log('Old schoooooooooool')
	     var expensive = [];
	     for(var i = 0; i < list.length-1; i++) {
	       if (list[i].price > 20) {
	         expensive.push(list[i].name);
	       }
	     }

	     console.log(expensive) // ["restaurant"]

	     console.log('c\'est déjà mieux !')
	     var expensive = [];
	     list.forEach((item) => {
	       if (item.price > 20) {
	         expensive.push(item.name)
	       }
	     })
	      console.log(expensive) // ["restaurant"]

	      console.log('Au top !')
	      var expensive = list
	      .filter((element) => {
	        return element.price > 20
	      }).map((element) => {
	        return element.name
	      })

	      console.log(expensive)

	      console.log('trouvons le moins cher')
	      var lowest = list.reduce((accumulateur, valeurCourante) => {
	        return (accumulateur.price > valeurCourante.price) ? valeurCourante.price : accumulateur
	      })
	      console.log(lowest)

	      console.log('on applique l\'inflation chaque année')
	      var modifyPrice = (item) => {
	        item.price = item.price * 1.05
	        return item
	      }

	      var returnPrices = (item) => {
	        return item.price
	      }

	      var newPricezs = list.map(modifyPrice).map(returnPrices)
	      console.log(newPricezs)

	   }

	  return this;
	}

	module.exports = new file3();


/***/ })
/******/ ]);