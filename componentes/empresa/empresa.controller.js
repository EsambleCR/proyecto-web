(function(){
  angular
    .module('myEnsamble')
    .controller('empresaController', empresaController);
    function empresaController(empresaService,proyectosService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var empresaCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        empresaCtrl.empresas = empresaService.getEmpresas();
      }init();

      empresaCtrl.save = function (){
        var newProyecto = {
          nombre: empresaCtrl.nombre,
          cedula: empresaCtrl.cedula,
          nombreContacto: empresaCtrl.nombreContacto,
          emailContacto: empresaCtrl.emailContacto,
          telefonoContacto: empresaCtrl.telefonoContacto,
          descripcion: empresaCtrl.descripcion,
          industria: empresaCtrl.industria,
          estado : 'pendiente'
        }
        proyectosService.setProyectos(newProyecto);
      }
    }
     //se establece un objeto de angular normal

})();
