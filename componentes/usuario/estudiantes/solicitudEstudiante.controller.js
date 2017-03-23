(function(){
  angular
    .module('myEnsamble')
    .controller('solicitudEstudianteController',solicitudEstudianteController);
    function solicitudEstudianteController(solicitudEstudianteService,ImagenService,Upload,$scope,administradorService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var solicitudEstudianteCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        solicitudEstudianteCtrl.cloudObj = ImagenService.getConfiguration();
        solicitudEstudianteCtrl.carreras = administradorService.getCarreras();
        // solicitudEstudianteCtrl.cursos = administradorService.asignarCurso();
      }init();

    // solicitudEstudianteCtrl.preSave = function(){
    //     solicitudEstudianteCtrl.cloudObj.data.file = document.getElementById("foto").files[0];
    //     solicitudEstudianteCtrl.cloudObj.data.file = document.getElementById("curriculum").files[0];
    //     Upload.upload(solicitudEstudianteCtrl.cloudObj)
    //     .success(function(data){
    //         solicitudEstudianteCtrl.save(data.url);
    //       });
    //     }

      solicitudEstudianteCtrl.save = function(){
              var nuevoEstudiante ={
              nombre : solicitudEstudianteCtrl.nombreEstudiante,
              apellido1 : solicitudEstudianteCtrl.apellido1Estudiante,
              apellido2 : solicitudEstudianteCtrl.apellido2Estudiante,
              genero : solicitudEstudianteCtrl.genero,
              emailEstudiante : solicitudEstudianteCtrl.emailEstudiante,
              cursos: solicitudEstudianteCtrl.cursos,
              carreras : solicitudEstudianteCtrl.carreras
              // foto : pFoto,
              // curriculum : pCurriculum
              // estado : 'pendiente'
          }
        solicitudEstudianteService.setSolicitudEstudiantes(nuevoEstudiante);
        console.log(nuevoEstudiante);
        }
      }

})();

//solicitudEstudianteCtrl.cursos != null && solicitudEstudianteCtrl.carreras != null
