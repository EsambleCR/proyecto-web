(function(){
  angular
  .module('myEnsamble')
  .service('inicioSesionService', inicioSesionService);

  function inicioSesionService(){
    var inicioSesion = [];
    var publicAPI = {
      inicioSesionUsuario : _inicioSesionUsuario

    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _inicioSesionUsuario(usuario){
      var usuarioLocal = estudianteService.getEstudiantes();
      for (var i = 0; i < usuarioLocal.length; i++) {
        if (usuarioLocal[i].correo == usuario.correo && usuarioLocal[i].contrasenna== usuario.contrasenna) {
          return true;
        }

      }
    }

    function _nombreInicio(pTrue){
      var datosUsuario = inicioSesionService._inicioSesionUsuario();
        if (datosUsuario == true){
            return usuarioLocal[i].name;
      }
    }
  }
})();
