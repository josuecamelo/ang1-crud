angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    controller: function (MathFactory, MathService) { //Math Factory sendo injetado para usar globalmente
      var vm = this //vm view model - para aparecer na view tem que expor ao this
      vm.hello = 'Hello World Josué Camelo!';
      vm.person = {
          name: 'Josué',
          last_name: 'Camelo'
      };

      vm.list = [{
        name: 'Daniel',
        lastname: 'Camelo'
      },{
        name: 'Josué ',
        lastname: 'Camelo'
      },{
        name: 'Priscila',
        lastname: 'Camelo'
      }];

      vm.alertMe = function(){
            alert(vm.person.name);
      };

      vm.sum = function(num1, num2){
        return alert(MathFactory.sum(num1, num2));
      };

      vm.sub = function(num1, num2){
          return alert(MathService.subService(num1, num2));
      };
    }
  });
