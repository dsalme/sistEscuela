(function() {
  'use strict';
  angular.module('sistEscuela', ['ngRoute']);
  angular.module('sistEscuela').config(appConfig);

  function appConfig($routeProvider){
    console.log('aasads');
    $routeProvider
      .when('/alumnos', {
      controller:'controllerAlumno as vm',
      templateUrl:'app/views/view.alumno.html'
    }).otherwise({
      redirectTo:'/'
    });
  }
}());
