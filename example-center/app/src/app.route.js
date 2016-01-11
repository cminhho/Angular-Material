/**
 * Created by hmchung on 12/9/2015.
 */

(function () {
  angular
    .module('app.route', [])
    .config(function ($mdThemingProvider, $mdIconProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/mdTable");

    });
})();
