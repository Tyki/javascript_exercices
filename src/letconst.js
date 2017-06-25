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
