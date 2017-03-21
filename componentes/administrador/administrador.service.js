(function(){
  angular
  .module('myEnsamble')
  .service('administradorService', administradorService);

  function administradorService(){
    var carreras = [
      {
        nombre: "Diseño y Desarrollo Web"

      },
      {
        nombre: "Telemática"
      }
    ];
    var publicAPI = {
      setCarreras : _setCarreras,
      getCarreras : _getCarreras
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setCarreras(pCarrera){
      carreras.push(pCarrera);
      alert('Carrera successfully added!');
    }

    function _getCarreras(){
      return carreras;
    }
  }

})();
