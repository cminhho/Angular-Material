(function ()
{
    'use strict';

    angular
        .module('app.navigation')
        .controller('NavigationController', NavigationController);

    /** @ngInject */
    function NavigationController()
    {
        var vm = this;

        // Data
        vm.msScrollOptions = {
            suppressScrollX: true
        };

        // Methods

        //////////
    }

})();


