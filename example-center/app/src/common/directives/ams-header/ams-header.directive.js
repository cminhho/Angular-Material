/**
 * Created by hmchung2 on 10/31/15.
 */
(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name directive.amsHeader:ams-header
   * @restrict EA
   * @scope
   * @restrict E
   * @param {object} param1 This is the parameter1 description
   *
   * @description
   * This is an awesome directive!
   *
   * @example
   * <example module="directive.amsHeader">
   *    <ams-header></ams-header>
   * </example>
   */
  angular
    .module('directive.amsHeader', [])
    .directive('amsHeader', amsHeader);

  amsHeader.$inject = ['$window'];

  /* @ngInject */
  function amsHeader($window) {
    var directive = {
      controller: ctrl,
      link: link,
      restrict: 'EA',
      transclude: true,
      scope: {
        title: '@'
      },
      templateUrl: "src/common/directives/ams-header/ams-header.html"
    };
    return directive;

    function ctrl() {
    }

    function link(scope, element, attrs) {
    }
  }
})();