(function(){
  angular
    .module('myEnsamble')
    .controller('proyectosController', proyectosController);
    function proyectosController(proyectosService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var proyectosCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
       proyectosCtrl.proyectos = proyectosService.getProyectos();
       //proyectosCtrl.empresas = empresaService.getEmpresas();
       
      }init();

      proyectosCtrl.save = function (){
        var newProyectos = {
          nombre: proyectosCtrl.nombre,
          cedula: proyectosCtrl.cedula,
          nombreContacto: proyectosCtrl.nombreContacto,
          emailContacto: proyectosCtrl.emailContacto,
          telefonoContacto: proyectosCtrl.telefonoContacto,
          descripcion: proyectosCtrl.descripcion,
          industria: proyectosCtrl.industria,
          estado : 'pendiente'
        }
        proyectosService.setProyectos(newProyectos);
        console.log(newProyectos);
      }

      proyectosCtrl.aceptar = function(pobjProyecto){
        //console.log(pobjProyecto);
        pobjProyecto.estado = 'aceptado';
        proyectosService.setAceptado(pobjProyecto);
        
      }
      proyectosCtrl.rechazado = function(pobjProyecto){
        //console.log(pobjProyecto);
        pobjProyecto.estado = 'rechazado';
        proyectosService.setRechazado(pobjProyecto);
        
      }
    }
     //se establece un objeto de angular normal

})();