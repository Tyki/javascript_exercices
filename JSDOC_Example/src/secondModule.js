/**
 * mySecondModule's descritpion
 *
 * @namespace
 * @author Baptiste Leulliette
 */
var secondModule = (function () {

    /**
     * Description of my publicSecondMethod in my secondModule
     *
     * @memberof secondModule
     * @param {String} first - my first string param
     * @param {String} second - my second string param
     * @param {String} third - my third string param
     * @return {String} - The concatenation of the three params
     */
    var publicSecondMethod = function (first, second, third) {
        return 'a string this time'
    };

    return {
        publicSecondMethod: publicSecondMethod
    };

})();
