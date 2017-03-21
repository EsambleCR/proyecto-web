(function(){
  angular
    .module('myEnsamble')
    .controller('solicitudEstudianteController',solicitudEstudianteController);
    function solicitudEstudianteController(solicitudEstudianteService,ImagenService,Upload,$scope){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var solicitudEstudianteCtrl = this; //binding del controlador con el html, solo en el controlador
        solicitudEstudianteCtrl.cloudObj = ImagenService.getConfiguration();
        
      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
      }init();

    solicitudEstudianteCtrl.preSave = function almacenarSolicitud(){
        solicitudEstudianteCtrl.cloudObj.data.file = document.getElementById("foto").files[0];
        solicitudEstudianteCtrl.cloudObj.data.file = document.getElementById("curriculum").files[0];
        Upload.upload(solicitudEstudianteCtrl.cloudObj)
          .success(function(data){
            solicitudEstudianteCtrl.save(data.url);
          });
        }

      solicitudEstudianteCtrl.save= function(pFoto,pCurriculum){
              var pnuevoEstudiante ={
              nombre : solicitudEstudianteCtrl.nombreEstudiante,
              apellido1 : solicitudEstudianteCtrl.apellido1Estudiante,
              apellido2 : solicitudEstudianteCtrl.apellido2Estudiante,
              genero : solicitudEstudianteCtrl.genero,
              emailEstudiante : solicitudEstudianteCtrl.emailEstudiante,
              cursos: solicitudEstudianteCtrl.cursos,
              carreras : solicitudEstudianteCtrl.carreras,
              foto : pFoto,
              curriculum : pCurriculum
          }
        solicitudEstudianteService.setSolicitudEstudiantes(pnuevoEstudiante);
        } 
     }
     //se establece un objeto de angular normal

})();

//solicitudEstudianteCtrl.cursos != null && solicitudEstudianteCtrl.carreras != null