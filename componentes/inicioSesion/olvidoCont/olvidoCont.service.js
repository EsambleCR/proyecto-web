(function(){
  angular
  .module('myEnsamble')
  .service('olvidoContService', olvidoContService);

  function olvidoContService(){
    var correos = [];
    var publicAPI = {
      setCorreos : _setCorreos,
      getCorreos : _getCorreos
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setCorreos(pCorreo){
      correos.push(pCorreo);
      alert("Contraseña Solicitada");
    }
    function _getCorreos(){
      return correos
    }

  }

})();
