(function(){
  angular
  .module('myEnsamble')
  .service('profesorService', profesorService);

  function profesorService(){
    var profesores = [];
    var publicAPI = {
      setProfesores: _setProfesores,
      getProfesores : _getProfesores
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setProfesores(pProfesor){
      profesores.push(pProfesor);
      localStorage.setItem('mProfesorLocal',JSON.stringify(profesores));
    }

    function _getProfesores(){
      var profesorLocal = JSON.parse(localStorage.getItem('mProfesorLocal'));
      return profesorLocal;
    }
  }

})();
