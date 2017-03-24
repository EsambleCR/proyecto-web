(function(){
  angular
    .module('myEnsamble')
    .controller('estadoEstudianteController',estadoEstudianteController);
    function estadoEstudianteController(estudianteService,ImagenService,Upload,$scope,solicitudEstudianteService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estadoEstudianteCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
          estadoEstudianteCtrl.aceptado = solicitudEstudianteService.getSolicitudEstudiantes();
      }init();
            estadoEstudianteCtrl.aceptado = function(situacionEstado){
              situacionEstado.estado = 'Aceptado';
              estudianteService.setSolicitudAceptado(situacionEstado);
            }
            estadoEstudianteCtrl.rechazado = function(situacionEstado){
              situacionEstado.estado = 'Rechazado';
              estudianteService.setSolicitudRechazado(situacionEstado);
            }
            estadoEstudianteCtrl.vetado = function(situacionEstado){
              situacionEstado.estado = 'Vetado';
              estudianteService.setSolicitudVetado(situacionEstado);
            }

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

})();
