(function(){
  angular
  .module('myEnsamble')
  .service('administradorService', administradorService);

  function administradorService(){
    var carreras = [
      {
        nombre: "Diseño y Desarrollo Web",
        cursos: [
          "Fundamentos de Programación",
          "Diseño Web I",
          "Diseño Web II"
         ]

      },
      {
        nombre: "Telemática",
        cursos: [
          "Redes I",
          "Redes II"
         ]
      }
    ];
    var publicAPI = {
      setCarreras : _setCarreras,
      getCarreras : _getCarreras,
      getCarreraID : _getCarreraID,
      eliminarCarrera : _eliminarCarrera,
      asignarCurso : _asignarCurso,
      eliminarCurso : _eliminarCurso
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setCarreras(pCarrera){
      carreras.push(pCarrera);
      alert('Carrera successfully added!');
    }

    function _getCarreras(){
      return carreras;
    }

    function _getCarreraID(pCarrera) {
      var carreraIndex = -1;
      for (var i = 0; i < carreras.length; i++) {
        if (pCarrera == carreras[i].nombre ) {
          carreraIndex = i;
        }
      }
      return carreraIndex;
    }

    function _getCursoID(pCurso) {
      var cursoIndex = -1;
      for (var i = 0; i < carreras.length; i++) {
        if (pCarrera == carreras[i].nombre ) {
          cursoIndex = i;
        }
      }
      return carreraIndex;
    }

    function _eliminarCarrera(pCarrera) {
      carreras.splice(Number(pCarrera), 1);
    }

    function _asignarCurso(pCurso, pCarrera) {
      carreras[pCarrera].cursos.push(pCurso);
    }

    function _eliminarCurso(pCurso, pCarrera) {
      carreras[pCarrera].cursos.splice(pCurso);
    }
  }

})();