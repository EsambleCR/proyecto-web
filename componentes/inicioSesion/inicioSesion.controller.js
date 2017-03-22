(function(){
  angular
    .module('myEnsamble')
    .controller('inicioSesionController', inicioSesionController);
    function inicioSesionController(inicioSesionService,$state, $scope){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var inicioSesionCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute

      }init();
      inicioSesionCtrl.inicioSesion = function(auth){

        if (inicioSesionCtrl.correo != null && inicioSesionCtrl.contrasenna != null) {
          var nuevoInicio = {
            correo : inicioSesionCtrl.correo,
            contrasenna : inicioSesionCtrl.contrasenna
          }
            
        }
      }
    }
     //se establece un objeto de angular normal

})();

