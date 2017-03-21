(function(){
  angular
  .module('myEnsamble')
  .service('carreraService', carreraService);

  function carreraService(){
    var carreras = [
      {
         nombre: "Diseño y Desarrollo Web",
         cursos: [
          "Fundamentos de Programación Web",
          "Diseño Web I",
          "Introudccion a TI"
         ]
       }
    ];
    var publicAPI = {
      setCarreras : _setCarreras,
      getCarreras : _getCarreras
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setCarreras(pCarrera){
      carreras.push(pCarrera);
      console.log(pCarrera);
      alert("Carrera Agregada");
    }

    function _getCarreras(){
      return carreras;
    }
  }

})();
