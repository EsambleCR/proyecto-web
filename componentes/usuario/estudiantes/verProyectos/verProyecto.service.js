(function(){
  angular
  .module('myEnsamble')
  .service('verProyectoService', verProyectoService);

  function verProyectoService(){
    var proyectos = [];
    var publicAPI = {
      setProyectos: _setProyectos,
      getVerProyecto : _getVerProyecto
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setProyectos(pProyectos){
      proyectos.push(pProyectos);
      localStorage.setItem('mProyectoLocal',JSON.stringify(proyectos));
    }

    function _getVerProyecto(){
      var proyectoLocal = JSON.parse(localStorage.getItem('mProyectoLocal'));
      return proyectoLocal;
    }
  }

})();


