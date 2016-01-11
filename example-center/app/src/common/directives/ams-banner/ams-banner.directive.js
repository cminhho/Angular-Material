/**
 * Created by vineethn on 8/20/15.
 */

(function () {
  angular.module("directive.banner", ['ngMaterial', 'multi-transclude'])
    .directive("amsBanner", function () {
      var AmsBannerController = function ($scope) {
        $scope.openMenu = function ($mdOpenMenu, ev) {
          $mdOpenMenu(ev);
        };
        $scope.alertUser = function (parameter) {
          var contextPath = getContextPath();
          if (parameter !== contextPath) {
            window.location.href = getUrlToNavigate(parameter);
          }
        }

        function getContextPath() {
          return window.location.pathname.substring(1, window.location.pathname.indexOf("/", 2));
        }

        function getUrlToNavigate(parameter) {
          var array = window.location.href.split("/");
          var result = array[0] + "//" + array[2] + "/" + parameter;
          return result;
        }

      };

      var AmsBannerLink = function (scope, element, attr) {
        scope.header = {
          title: attr.amsHeaderTitle,
          alt: attr.amsHeaderAlt,
          logo: attr.amsHeaderLogo,
        };
      };

      return {
        restrict: 'E',
        transclude: true,
        templateUrl: "./src/common/directives/ams-banner/ams-banner.html",
        link: AmsBannerLink,
        controller: AmsBannerController
      };
    })
}());
