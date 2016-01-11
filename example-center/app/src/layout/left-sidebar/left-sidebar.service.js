(function () {
  'use strict';

  angular.module('leftSidebar.service', [])
    .service('userService', ['$q', UserService]);
  /**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function UserService($q) {
    var users = [
      {
        name: 'My Recent Tasks',
        avatar: 'svg-1',
        content: 'mdTable'
      },
      {
        name: 'My Favorite Tasks',
        avatar: 'svg-1',
        content: '/'
      },
      {
        name: 'Popular Tasks',
        avatar: 'svg-1',
        content: '/'
      },
      {
        name: 'Related To:',
        avatar: 'svg-1',
        content: '/'
      },
      {
        name: 'All Tasks',
        avatar: 'svg-1',
        content: '/'
      }
    ];

    // Promise-based API
    return {
      loadAllUsers: function () {
        // Simulate async nature of real remote calls
        return $q.when(users);
      }
    };
  }

})();
