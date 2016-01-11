(function () {
    'use strict';

    angular
        .module('module.alarmSeverityIcons', ['ui.router'])
        .provider('alarmSeverityIcons', function() {
            this.defaultTheme = {
                'critical': {
                    'background-color': '#DA2A27',
                    'color': '#fff'
                },
                'major': {
                    'background-color': '#F1A83F',
                    'color': '#000'
                },
                'minor': {
                    'background-color': '#FFEB41',
                    'color': '#000'
                },
                'warning': {
                    'background-color': '#5EE2D7',
                    'color': '#000'
                },
                'indeterminate': {
                    'background-color': '#E8E8E8',
                    'color': '#000'
                },
                'no-alarms': {
                    'background-color': '#A3E1B7',
                    'color': '#000'
                }
            };
            this.customTheme = {};
            this.$get = function() {
                var customTheme = this.customTheme;
                var defaultTheme = this.defaultTheme;
                return {
                    getTheme: function() {
                        return customTheme
                    },
                    getDefaultTheme: function(){
                        return defaultTheme
                    }
                }
            };
            this.setTheme = function(customTheme) {
                if(Object.getOwnPropertyNames(this.defaultTheme).length > 0){
                    this.customTheme = customTheme;
                }
            };
        })
        .directive('alarmSeverityIcons', function(alarmSeverityIcons){
            // Usage: <input type="text" ams-alarm-severity-icons="Critical">
            //
            // Creates:
            //
            var directive = {
                link: link,
                scope: {
                    alarmSeverityIcons: '='
                },
                templateUrl: 'src/modules/alarm-severity-icons/alarm-severity-icons.directive.html',
                restrict: 'A'
            };
            return directive;

            function link(scope, elements, attrs) {
                //scope.ownStyle = {};
                //scope.abbreviatedName = attrs.alarmSeverityIcons.match('^[^\*]');
                var abbreviatedName = scope.alarmSeverityIcons.match('^[^\*]');
                scope.abbreviatedName = abbreviatedName;
                //scope.myStyle = alarmSeverityIcons.getTheme()[attrs.alarmSeverityIcons.toLowerCase()];
                scope.myStyle = alarmSeverityIcons.getDefaultTheme()[scope.alarmSeverityIcons.toLowerCase()];
                //scope.bgColor = attrs.alarmSeverityIcons.toLowerCase();
                //scope.bgColor = scope.alarmSeverityIcons.toLowerCase();
                if(Object.getOwnPropertyNames(alarmSeverityIcons.getDefaultTheme()).length > 0){
                    scope.ownStyle = alarmSeverityIcons.getDefaultTheme()[scope.alarmSeverityIcons.toLowerCase()];
                }else{
                    scope.ownStyle = scope.myStyle;
                }
            }
        })
        .config(function config($stateProvider) {
        $stateProvider.state('alarmSeverityIcons', {
            url: '/alarm-severity-icons',
            views: {
                '@': {
                    templateUrl: 'src/modules/alarm-severity-icons/alarm-severity-icons.html',
                    controller: function ($http, $q, $timeout, $scope, $mdDialog) {

                        $scope.alarms = [
                            {
                                id: '1',
                                severity: 'critical',
                                eventTime: (new Date()).getTime(),
                                sourceName: 'Ne System 50:50:51:13',
                                probableCause: 'routingFailre',
                                specificProblem: 'ePIPEDown',
                                proposedRepairAction: '%slot/appliqueSlot.configuraation'
                            },
                            {
                                id: '2',
                                severity: 'MAJOR',
                                eventTime: (new Date()).getTime(),
                                sourceName: 'Ne System 50:50:51:13',
                                probableCause: 'routingFailre',
                                specificProblem: 'ePIPEDown',
                                proposedRepairAction: '%slot/appliqueSlot.configuraation'
                            },
                            {
                                id: '3',
                                severity: 'minor',
                                eventTime: (new Date()).getTime(),
                                sourceName: 'Ne System 50:50:51:13',
                                probableCause: 'routingFailre',
                                specificProblem: 'ePIPEDown',
                                proposedRepairAction: '%slot/appliqueSlot.configuraation'
                            },
                            {
                                id: '4',
                                severity: 'warning',
                                eventTime: (new Date()).getTime(),
                                sourceName: 'Ne System 50:50:51:13',
                                probableCause: 'routingFailre',
                                specificProblem: 'ePIPEDown',
                                proposedRepairAction: '%slot/appliqueSlot.configuraation'
                            },
                            {
                                id: '5',
                                severity: 'indeterminate',
                                eventTime: (new Date()).getTime(),
                                sourceName: 'Ne System 50:50:51:13',
                                probableCause: 'routingFailre',
                                specificProblem: 'ePIPEDown',
                                proposedRepairAction: '%slot/appliqueSlot.configuraation'
                            },
                            {
                                id: '6',
                                severity: '',
                                eventTime: (new Date()).getTime(),
                                sourceName: 'Ne System 50:50:51:13',
                                probableCause: 'routingFailre',
                                specificProblem: 'ePIPEDown',
                                proposedRepairAction: '%slot/appliqueSlot.configuraation'
                            }
                        ];

                        $scope.selected = [];
                        $scope.query = {
                            order: 'sourceName',
                            limit: 8,
                            page: 1
                        };

                        $scope.columns = [
                            {
                                name: 'Severity',
                                orderBy: 'severity',
                                unit: ''
                            },
                            {
                                descendFirst: true,
                                name: 'Event Time',
                                orderBy: 'eventTime'
                            },
                            {
                                name: 'Source Name',
                                orderBy: 'sourceName'
                            },
                            {
                                name: 'Probable Cause',
                                orderBy: 'totalExecutions',
                                unit: ''
                            },
                            {
                                name: 'Specific Problem',
                                orderBy: 'carbs.value',
                                unit: ''
                            },
                            {
                                name: 'Proposed Repair Action',
                                orderBy: '',
                                trim: true,
                                unit: ''
                            }
                        ];

                        //$http.get('/api/alarm').then(function (desserts) {
                        //    $scope.desserts = desserts.data;
                        //});

                        //$scope.getTypes = function () {
                        //    return ['Candy', 'Ice cream', 'Other', 'Pastry'];
                        //};
                        //
                        //$scope.onpagechange = function (page, limit) {
                        //
                        //    console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
                        //    console.log('Page: ' + page + ' Limit: ' + limit);
                        //
                        //    var deferred = $q.defer();
                        //
                        //    $timeout(function () {
                        //        deferred.resolve();
                        //    }, 2000);
                        //
                        //    return deferred.promise;
                        //};
                        //
                        //$scope.loadStuff = function () {
                        //    var deferred = $q.defer();
                        //
                        //    $timeout(function () {
                        //        deferred.reject();
                        //    }, 2000);
                        //
                        //    $scope.deferred = deferred.promise;
                        //};
                        //
                        //$scope.onorderchange = function (order) {
                        //
                        //    console.log('Scope Order: ' + $scope.query.order);
                        //    console.log('Order: ' + order);
                        //
                        //    var deferred = $q.defer();
                        //
                        //    $timeout(function () {
                        //        deferred.resolve();
                        //    }, 2000);
                        //
                        //    return deferred.promise;
                        //};

                    }
                }
            }
        })
    });
})();