/**
 * Created by lvcam on 12/29/2015.
 */
(function () {
    'use strict';

    angular
        .module('module.mdAutocomplete', ['ui.router']).config(function config($stateProvider) {
            $stateProvider.state('mdAutocomplete', {
                url: '/md-autocomplete',
                views: {
                    '@': {
                        templateUrl: 'src/modules/md-autocomplete/md-autocomplete.html',
                        controller: function ($http, $q, $timeout, $scope, $mdDialog) {
                            $scope.dataSelected = [];
                            $scope.data = ["Brazil", "Chile", "Canada",
                                "Laos", "Malay", "Singapore", "Philip",
                                "Indonesia", "Indian", "Swan"];

                            $scope.searchText = null;
                            $scope.search = querySearch;
                            $scope.onAdd = onAdd;
                            $scope.onRemove = onRemove;
                            $scope.showSelected = showSelected;

                            function querySearch(query) {
                                if (!query) {
                                    return $scope.data;
                                }
                                return filterSearch($scope.data, query);
                            }

                            /**
                             * Filter name
                             * @param dataSource
                             * @param searchString
                             * @returns {Array}
                             */
                            function filterSearch(dataSource, searchString) {
                                var filterArray = [];
                                for (var i = 0; i < dataSource.length; i++) {
                                    var str = dataSource[i].toLowerCase();
                                    if (str.search(searchString) >= 0) {
                                        filterArray.push(dataSource[i]);
                                    }
                                }
                                return filterArray;
                            }

                            /**
                             * Remove item on $scope.data after add item to $scope.dataSelected
                             * @param item
                             */
                            function onAdd(item) {
                                removeItem(item);
                            }

                            /**
                             * Add item to $scope.data after remove item on $scope.dataSelected
                             * @param item
                             */
                            function onRemove(item) {
                                addItem(item);
                            }

                            /**
                             * Remove item function
                             * @param item
                             */
                            function removeItem(item) {
                                for (var i = 0; i < $scope.data.length; i++) {
                                    if ($scope.data[i] === item) {
                                        $scope.data.splice(i, 1);
                                        break;
                                    }
                                }
                            }

                            /**
                             * Add item function
                             * @param item
                             */
                            function addItem(item) {
                                $scope.data.push(item);
                                $scope.data.sort();
                            }

                            function showSelected() {
                                $mdDialog.show(
                                    $mdDialog.alert()
                                        .parent(angular.element(document.querySelector('#popupContainer')))
                                        .clickOutsideToClose(true)
                                        .title('List')
                                        .textContent('List selected: ' + $scope.dataSelected.join(' - '))
                                        .ok('OK')
                                );
                            }
                        }
                    }
                }
            })

        });
})();