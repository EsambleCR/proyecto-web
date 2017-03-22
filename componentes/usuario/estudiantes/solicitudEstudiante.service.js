(function(){
  angular
  .module('myEnsamble')
  .service('solicitudEstudianteService',solicitudEstudianteService);

  function solicitudEstudianteService(){
    var solicitudEstudiantes = [];
    var publicAPI = {
      setSolicitudEstudiantes : _setSolicitudEstudiantes,
      getSolicitudEstudiantes : _getSolicitudEstudiantes
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setSolicitudEstudiantes(pnuevoEstudiante){
      solicitudEstudiantes.push(pnuevoEstudiantes);
      localStorage.setItem('mSolicitudEstudiantesLocal',JSON.stringify(solicitudEstudiantes));
    }

    function _getSolicitudEstudiantes(){
      var solicitudEstLocal = JSON.parse(localStorage.getItem('mSolicitudEstudiantesLocal'));
      return solicitudEstudiantes;
    }
  }

})();
