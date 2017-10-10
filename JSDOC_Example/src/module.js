/**
 * Description of my First module
 *
 * @namespace
 * @author Baptiste Leulliette
 */
var monModule1 = (function () {

    /**
     * privateMethod is meant to be called from publicMethod
     * <br>This method is shown in doc only with -p when generating the documentation
     *
     * @private
     * @memberOf monModule1
     * @param {String} firstParam - description of firstParam
     * @returns {Object} - The object returned
     */
     var privateMethod = function (firstParam) {
       console.log('private')

       return {message: 'private'}
     };

    /**
     * The public method exposed from my module
     *
     * @public
     * @memberOf monModule1
     * @param {String} myParam1 - Description myParam1
     * @param {String} myParam2 - Description myParam2
     * @returns {Object} - The public object returned
     */
     var publicMethod = function (myParam1, myParam2) {
       console.log('public');

       this.privateMethod(myParam1);
       console.log(myParam2);

       return {message: 'public'}
     };

     return {
       publicMethod: publicMethod
     };

})();
