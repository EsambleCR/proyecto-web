(function(){
  angular
    .module('myEnsamble')
    .controller('verProyectoController',verProyectoController);
    function verProyectoController(verProyectoService,ImagenService,Upload,$scope){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var verProyectoCtrl = this; //binding del controlador con el html, solo en el controlador
        verProyectoCtrl.cloudObj = ImagenService.getConfiguration();
        
      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        verProyectoCtrl.proyectosList = verProyectoService.getVerProyecto();
      }init();
        
     //se establece un objeto de angular normal

}})();
