/**
 * Created by josuecamelo on 19/12/17.
 */
// @ text
// = two way databinding
// < one way databing
// & function

angular
    .module('app')
    .component('hero', {
        templateUrl: 'app/hero.html',
        bindings: {
            hero: '<'
        },
        controller: function() {
            this.hero = 'This is a new component from Angular 1.5 - SON';
            console.log(this.hero);
        }
        //template:
    });