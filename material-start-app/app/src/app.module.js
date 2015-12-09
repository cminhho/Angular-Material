/**
 * Created by hmchung on 12/9/2015.
 */
angular.module('app.thirdParty', [
  'ui.router',
  'md.data.table',
  'ngMdIcons',
  'multi-transclude'
]);

angular.module('app.directives', [
  'directive.amsHeader',
  'directive.banner'
]);

angular.module('app.modules', [
  'users',
  'module.mdDataTable'
]);

angular
  .module('starterApp', ['ngMaterial',
    'app.thirdParty',
    'app.modules',
    'app.directives'
  ])
  .config(function($mdThemingProvider, $mdIconProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/mdTable");
    $mdIconProvider
      .defaultIconSet("./assets/svg/avatars.svg", 128)
      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
      .icon("share"      , "./assets/svg/share.svg"       , 24)
      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
      .icon("phone"      , "./assets/svg/phone.svg"       , 512);

//    $mdThemingProvider.theme('default')
//      .primaryPalette('brown')
//      .accentPalette('red');


    // Extend the red theme with a few different colors
    var deepPurpleMap = $mdThemingProvider.extendPalette('pink', {
      '500': '3C2D64',
      'A100': 'EDE7F6'
    });
    // Register the new color palette map with the name <code>neonRed</code>
    $mdThemingProvider.definePalette('deepPurple', deepPurpleMap);
    // Use that theme for the primary intentions
    $mdThemingProvider.theme('default')
      .primaryPalette('pink')
      .accentPalette('deepPurple')
      .warnPalette('red')
      .backgroundPalette('grey');

    /**
     * Defining Custom Palettes
     *
     * By default, shades 500, 300 800 and A100 are used for primary and warn,
     * while A200, A100, A400 and A700 are used for accent.
     * http://www.google.com/design/spec/style/color.html#color-color-palette
     */
    $mdThemingProvider.definePalette('hello-center-palette', {
      '50': 'EDE7F6',
      '100': 'D1C4E9',
      '200': 'B39DDB',
      '300': '9575CD',
      '400': '7E57C2',
      '500': '673AB7',
      '600': '5E35B1',
      '700': '512DA8',
      '800': '4527A0',
      '900': '3C2D64',
      'A100': 'B388FF',
      'A200': '7C4DFF',
      'A400': '651FFF',
      'A700': '6200EA',
      'contrastDefaultColor': 'light',    // whether, by default, text         (contrast)
      // on this palette should be dark or light
      'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
        '200', '300', '400', 'A100'],
      'contrastLightColors': undefined    // could also specify this if default was 'dark'
    });

    $mdThemingProvider.theme('hello-center')
      .primaryPalette('hello-center-palette', {
        'default': '900'
      });
    $mdThemingProvider.setDefaultTheme('hello-center');


  });


