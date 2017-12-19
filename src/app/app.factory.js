/**
 * Created by josuecamelo on 19/12/17.
 */

angular
    .module('app')
    .factory('MathFactory', function() {
        var factory = {}; //criando objeto de retorno

        factory.sub = sub;
        factory.sum = sum;

        function sub(num1, num2) {
          return num1 - num2;
        }

        function sum(num1, num2) {
          return num1 + num2;
        }

        return factory; //ou usar no geral

        /*return {
            sub: function(num1, num2) {
                return num1 - num2;
            },
            sum: function(num1, num2){
                return num1 + num2;
            }
        }*/
    });
