(function(){
  angular
    .module('myEnsamble')
    .controller('profesorController',profesorController);
    function profesorController(profesorService,ImagenService,Upload,$scope){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var profesorCtrl = this; //binding del controlador con el html, solo en el controlador
        profesorCtrl.cloudObj = ImagenService.getConfiguration();
        
      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        profesorCtrl.profesoresList = profesorService.getProfesores();
      }init();
        
     //se establece un objeto de angular normal

}})();
