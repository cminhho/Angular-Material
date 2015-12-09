/**
 * Created by hmchung on 12/9/2015.
 */
(function () {
  'use strict';

  /**
   * @ngdoc config
   * @name app.route:app
   * @requires
   *
   * @description
   * Describe the config here...
   */
  angular
    .module('module.route', [])
    .config('Route', Route);

  Route.$inject = ['$stateProvider'];

  /* @ngInject */
  function Route($urlRouterProvider) {
    $urlRouterProvider.otherwise("/md-table");
  }
})();