(function(){
  angular
    .module('myEnsamble')
    .controller('administradorController', administradorController);
    function administradorController(administradorService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var administradorCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
          administradorCtrl.carreras = administradorService.getCarreras();
      }init();

      administradorCtrl.save = function (){
        var nuevaCarrera = {
          nombre: administradorCtrl.nombre,
          cursos: []
        }
        administradorService.setCarreras(nuevaCarrera);
        console.log(nuevaCarrera);
      }

      administradorCtrl.eliminar = function (){
        var carreraSeleccionada = administradorService.getCarreraID(administradorCtrl.carreraSeleccionada);
        administradorService.eliminarCarrera(carreraSeleccionada);
      }

      administradorCtrl.asignar = function () {
        var carreraSeleccionada = administradorService.getCarreraID(administradorCtrl.carreraSeleccionadaCurso);
        alert(carreraSeleccionada);
        administradorService.asignarCurso(administradorCtrl.nombreCurso, carreraSeleccionada);
        alert('Agregado');
      }




    }
     //se establece un objeto de angular normal

})();