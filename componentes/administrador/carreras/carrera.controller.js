(function(){
  angular
    .module('myEnsamble')
    .controller('carreraController', carreraController);
    function carreraController(carreraService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var carreraCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        carreraCtrl.carreras = carreraService.getCarreras();
      }init();

      carreraCtrl.save= function(){

        var carreraNueva ={
          nombre : carreraCtrl.nombre,

        }

        carreraService.setCarreras(carreraNueva);
      }
    }

})();
