(function(){
  angular
  .module('myEnsamble')
  .service('ImagenService', ImagenService);

  function ImagenService($http){

    var cloudObj = {
      url:'https://api.cloudinary.com/v1_1/db8ebl8lb/image/upload',
      data:{
        upload_preset: 'siajmu25',
        tags:'Any',
        context:'photo=test'
      }
    };

    var public_api = {
      getConfiguration:getConfiguration
    }
    return public_api;

    function getConfiguration(){
      return cloudObj;
    }


  }

})();
