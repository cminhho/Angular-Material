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

        .module('starterApp', ['ngMaterial', 'ngMessages',
            'app.thirdParty',
            'app.route',
            'app.theme',
            'app.layout',
            'app.modules',
            'app.directives'
        ]).config(function(alarmSeverityIconsProvider){
            alarmSeverityIconsProvider.setTheme({
                'critical': {
                    'background-color': 'blue',
                    'color': '#fff'
                },
                'major': {
                    'background-color': '#F1A83F'
                },
                'minor': {
                    'background-color': '#FFEB41'
                },
                'warning': {
                    'background-color': '#5EE2D7'
                },
                'indeterminate': {
                    'background-color': '#E8E8E8'
                }
            });
        });
})();

