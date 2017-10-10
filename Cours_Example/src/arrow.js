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
