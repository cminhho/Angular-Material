(function ()
{
    'use strict';

    angular
        .module('app.checklist', ['ui.tree'])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        $stateProvider.state('app.checklist', {
            url    : '/checklist',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/apps/checklist/checklist.html',
                    controller : 'ChecklistController as vm'
                }
            },
            resolve: {
                Tasks: function (apiResolver)
                {
                    return apiResolver.resolve('todo.tasks@get');
                },
                Tags : function (apiResolver)
                {
                    return apiResolver.resolve('todo.tags@get');
                }
            }
        });

        $translatePartialLoaderProvider.addPart('app/main/apps/checklist');
    }

})();