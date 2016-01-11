/**
 * Created by hmchung on 12/9/2015.
 */
(function () {
  'use strict';

  angular
    .module('module.browseTasks', [
    ]).config(function config($stateProvider) {
      $stateProvider.state('mdTable', {
        url: '/mdTable',
        views: {
          'hint@': {
            template: 'Material Design Data Table'
          },
          '@': {
            templateUrl: 'src/modules/browse-tasks/browse-tasks.html',
            controller: function ($http, $q, $timeout, $scope, $mdDialog) {
              /* jshint validthis: true */
              /**
               * @ngdoc method
               * @name method1
               * @methodOf mdDataTable:md-data-table.controller
               * @description
               * This Method will set the selected user
               *
               * @param {Boolean} Description of parameter
               * @returns {Array} The returned item...
               */
              $scope.selected = [];
              $scope.query = {
                order: 'name',
                limit: 8,
                page: 1
              };

              $scope.columns = [
                {
                  name: 'Name & Description',
                  orderBy: 'name',
                  unit: ''
                },
                {
                  descendFirst: true,
                  name: 'Last Execution Date',
                  orderBy: 'type'
                },
                {
                  name: 'Executed By',
                  orderBy: 'calories.value'
                },
                {
                  name: 'Total Execution',
                  orderBy: 'totalExecutions',
                  unit: ''
                },
                {
                  name: 'Last Month',
                  orderBy: 'carbs.value',
                  unit: ''
                },
                {
                  name: 'Actions',
                  orderBy: '',
                  trim: true,
                  unit: ''
                }
              ];

              $http.get('/api/tasks').then(function (desserts) {
                $scope.desserts = desserts.data;
              });

              $scope.getTypes = function () {
                return ['Candy', 'Ice cream', 'Other', 'Pastry'];
              };

              $scope.onpagechange = function (page, limit) {

                console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
                console.log('Page: ' + page + ' Limit: ' + limit);

                var deferred = $q.defer();

                $timeout(function () {
                  deferred.resolve();
                }, 2000);

                return deferred.promise;
              };

              $scope.loadStuff = function () {
                var deferred = $q.defer();

                $timeout(function () {
                  deferred.reject();
                }, 2000);

                $scope.deferred = deferred.promise;
              };

              $scope.onorderchange = function (order) {

                console.log('Scope Order: ' + $scope.query.order);
                console.log('Order: ' + order);

                var deferred = $q.defer();

                $timeout(function () {
                  deferred.resolve();
                }, 2000);

                return deferred.promise;
              };
            }
          }
        }
      })
    });
})();