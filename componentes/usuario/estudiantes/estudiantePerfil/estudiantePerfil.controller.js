(function(){
  angular
    .module('myEnsamble')
    .controller('estudianteController',estudianteController);
    function estudianteController(estudianteService,ImagenService,Upload,$scope){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estudianteCtrl = this; //binding del controlador con el html, solo en el controlador
        estudianteCtrl.cloudObj = ImagenService.getConfiguration();
        
      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        estudianteCtrl.estudiantesList = estudianteService.getEstudiantes();
      }init();
        
        
    estudianteCtrl.preSave = function(){
        estudianteCtrl.cloudObj.data.file = document.getElementById("foto").files[0];
        estudianteCtrl.cloudObj.data.file = document.getElementById("curriculum").files[0];
        Upload.upload(estudianteCtrl.cloudObj)
          .success(function(data){
            estudianteCtrl.save(data.url);
          });
        }

      estudianteCtrl.save= function(pFoto,pCurriculum){

        if(estudianteCtrl.nombre != null && estudianteCtrl.apellido1 != null && estudianteCtrl.apellido2 != null && estudianteCtrl.genero != null && estudianteCtrl.fechaNacimientoEstudiante != null && estudianteCtrl.correo != null && estudianteCtrl.cursos != null && estudianteCtrl.carreras != null && estudianteCtrl.foto != null && estudianteCtrl.curriculum != null){
              var nuevoEstudiante ={
              nombre : estudianteCtrl.nombre,
              apellido1 : estudianteCtrl.apellido1,
              apellido2 : estudianteCtrl.apellido2,
              genero : estudianteCtrl.genero,
              fechaNacimientoEstudiante : estudianteCtrl.fechaNacimientoEstudiante,
              correo: estudianteCtrl.correo,
              cursos: estudianteCtrl.cursos,
              carreras : estudianteCtrl.carreras,
              foto : pFoto,
              curriculum : pCurriculum
              }
            }   

          $scope.status = '  ';
          $scope.customFullscreen = false;

          $scope.showAlert = function(ev) {
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('Cenfotec Software House')
                .textContent('Recibimos su solicitud satisfactoriamente,pronto estaremos en contacto!')
                .ariaLabel('Presiona aqui!')
                .ok('Entiendo!')
                .targetEvent(ev)
    );
  };
        }

    }

     //se establece un objeto de angular normal

})();
