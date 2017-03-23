(function(){
  angular
    .module('myEnsamble')
    .controller('estudianteController',estudianteController);
    function estudianteController(estudianteService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estudianteCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
      }init();


      /*   $scope.status = '  ';
          $scope.customFullscreen = false;

          $scope.showAlert = function(ev) {
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Cenfotec Software House')
                .textContent('Recibimos su solicitud satisfactoriamente,pronto estaremos en contacto!')
                .ariaLabel('Presiona aqui!')
                .ok('Entiendo!')
                .targetEvent(ev)
    );
  };*/
        }


     //se establece un objeto de angular normal

})();
