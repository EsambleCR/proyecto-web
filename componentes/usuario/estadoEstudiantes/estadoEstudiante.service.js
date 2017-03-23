(function(){
  angular
  .module('myEnsamble')
  .service('estadoEstudianteService', estadoEstudianteService);

  function estadoEstudianteService(solicitudEstudianteService){
    var estadoEstudiante = [];
    var publicAPI = {
      setEstadoEstudiante : _setEstadoEstudiante,
      getEstadoEstudiante : _getEstadoEstudiante,
      setSolicitudAceptado : _setSolicitudAceptado,
      setSolicitudRechazado : _setSolicitudRechazado,
      setSolicitudVetado : _setSolicitudVetado
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setEstadoEstudiante(pEstudiante){
      estadoEstudiante = _getEstadoEstudiante();
      estadoEstudiante.push(pEstadoEstudiante);
      localStorage.setItem('mEstadoEstudianteLocal',JSON.stringify(estadoEstudiante));
    }

    function _getEstadoEstudiante(){
      var listarEstadoEstudiantes = [],
          estadoEstudianteLocal = localStorage.getItem('mEstadoEstudianteLocal'),
          lista = JSON.parse(localStorage.getItem('mEstadoEstudianteLocal'));
      if (estadoEstudianteLocal == null) {
        listarEstadoEstudiantes = [];
      }else{
        listarEstadoEstudiantes = lista;
      }
      return listarEstadoEstudiantes;
    }

    function _setSolicitudAceptado(pEstudianteAceptado){
      var listarEstadoEstudiantes = _getEstadoEstudiante();
      for (var i = 0; i < listarEstadoEstudiantes.length; i++) {
        if (listarEstadoEstudiantes[i].emailEstudiante == pEstudianteAceptado.emailEstudiante) {
          listarEstadoEstudiantes[i] = pEstudianteAceptado;
        }
      }
        localStorage.setItem('mEstadoEstudianteLocal',JSON.stringify(listarEstadoEstudiantes));
    }

    function _setSolicitudRechazado(pEstudianteRechazado){
      var listarEstadoEstudiantes = _getEstadoEstudiante();
      for (var i = 0; i < listarEstadoEstudiantes.length; i++) {
        if (listarEstadoEstudiantes[i].emailEstudiante == pEstudianteRechazado.emailEstudiante) {
          listarEstadoEstudiantes[i] = pEstudianteRechazado;
        }
      }
        localStorage.setItem('mEstadoEstudianteLocal',JSON.stringify(listarEstadoEstudiantes));
    }

    function  _setSolicitudVetado(pEstudianteVetado){
      var listarEstadoEstudiantes = _getEstadoEstudiante();
      for (var i = 0; i < listarEstadoEstudiantes.length; i++) {
        if (listarEstadoEstudiantes[i].emailEstudiante == pEstudianteVetado.emailEstudiante) {
          listarEstadoEstudiantes[i] = pEstudianteVetado;
        }
      }
        localStorage.setItem('mEstadoEstudianteLocal',JSON.stringify(listarEstadoEstudiantes));
    }


  }

})();
