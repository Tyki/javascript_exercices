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
