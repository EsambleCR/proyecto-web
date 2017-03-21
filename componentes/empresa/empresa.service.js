(function(){
  angular
  .module('myEnsamble')
  .service('empresaService', empresaService);

  function empresaService(){
    var empresas = [];
    var publicAPI = {
      setEmpresas : _setEmpresas,
      getEmpresas : _getEmpresas
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setEmpresas(pEmpresa){
      empresas.push(pEmpresa);
      alert('Empresa Guardada');
    }

    function _getEmpresas(){
      return empresas;
    }
  }

})();
