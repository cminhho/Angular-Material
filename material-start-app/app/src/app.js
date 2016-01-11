/**
 * Created by hmchung on 12/9/2015.
 */
(function () {
  angular.module('app.thirdParty', [
    'ui.router',
    'md.data.table',
    'ngMdIcons',
    'multi-transclude'
  ]);

  angular
    .module('starterApp', ['ngMaterial',
      'app.thirdParty',
      'app.route',
      'app.theme',
      'app.layout',
      'app.modules',
      'app.directives'
    ]);
})();