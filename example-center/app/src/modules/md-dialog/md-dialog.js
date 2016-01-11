(function () {
    'use strict';

    angular
        .module('module.mdDialog', ['ui.router']).config(function config($stateProvider) {
            $stateProvider.state('mdDialog', {
                url: '/md-dialog',
                views: {
                    '@': {
                        templateUrl: 'src/modules/md-dialog/md-dialog.html',
                        controller: function ($http, $q, $timeout, $scope, $mdDialog, $mdMedia) {

                            $scope.showDeleteDialog = advancedDialog;
                            $scope.showConfirmDialog = advancedDialog;
                            $scope.showInfoDialog = advancedDialog;
                            $scope.showListDialog = listDialog;
                            $scope.showFormDialog = formDialog;
                            $scope.showAlertDialog = alertDialog;

                            $scope.dialogAlertModel = {
                                title: 'Alert Dialog',
                                content: 'This is alert dialog',
                                okButton: 'OK',
                                icon: 'assets/svg/ic_info_outline_white_24px.svg'
                            };

                            $scope.dialogDeleteModel = {
                                title: 'Delete Dialog',
                                content: 'Are you sure to delete this item?',
                                okButton: 'Delete',
                                cancelButton: 'Cancel',
                                icon: 'assets/svg/ic_info_outline_white_24px.svg'
                            };

                            $scope.dialogConfirmModel = {
                                title: 'Confirm Dialog',
                                content: 'There have some change. Do you warn to save?',
                                okButton: 'Save',
                                cancelButton: 'Cancel',
                                icon: 'assets/svg/ic_info_outline_white_24px.svg'
                            };

                            $scope.dialogInfoModel = {
                                title: 'Info Dialog',
                                content: 'Sets default layout direction unless overridden by another breakpoint.',
                                okButton: 'OK',
                                cancelButton: 'Cancel',
                                icon: 'assets/svg/ic_info_outline_white_24px.svg'
                            };

                            $scope.dialogListModel = {
                                title: 'List Dialog',
                                okButton: 'OK',
                                cancelButton: 'Cancel',
                                icon: 'assets/svg/ic_description_white_24px.svg',
                                contacts: [
                                    {
                                        "id": 1,
                                        "firstname": "Cam",
                                        "lastname": "Luu",
                                        "homephone": "123456789",
                                        "email": "asdds@gmail.com",
                                        "favorite": true,
                                        "img": "assets/svg/avatar-1.svg"
                                    }, {
                                        "id": 2,
                                        "firstname": "Cam 2",
                                        "lastname": "Luu 2",
                                        "homephone": "123456789",
                                        "email": "asdds@gmail.com",
                                        "favorite": true,
                                        "img": "assets/svg/avatar-1.svg"
                                    }, {
                                        "id": 3,
                                        "firstname": "Cam 3",
                                        "lastname": "Luu 3",
                                        "homephone": "123456789",
                                        "email": "asdds@gmail.com",
                                        "favorite": true,
                                        "img": "assets/svg/avatar-1.svg"
                                    }, {
                                        "id": 4,
                                        "firstname": "Cam 4",
                                        "lastname": "Luu 4",
                                        "homephone": "123456789",
                                        "email": "asdds@gmail.com",
                                        "favorite": true,
                                        "img": "assets/svg/avatar-1.svg"
                                    }, {
                                        "id": 5,
                                        "firstname": "Cam 5",
                                        "lastname": "Luu 5",
                                        "homephone": "123456789",
                                        "email": "asdds@gmail.com",
                                        "favorite": true,
                                        "img": "assets/svg/avatar-1.svg"
                                    }]
                            };

                            $scope.dialogFormModel = {
                                title: 'Form Dialog',
                                okButton: 'Send',
                                cancelButton: 'Cancel',
                                icon: 'assets/svg/ic_description_white_24px.svg'
                            };

                            //Alert Dialog
                            function alertDialog(ev, DialogModel) {
                                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
                                $mdDialog.show({
                                    controller: DialogController,
                                    templateUrl: 'src/modules/md-dialog/alert-template.html',
                                    parent: angular.element(document.body),
                                    targetEvent: ev,
                                    clickOutsideToClose: true,
                                    fullscreen: useFullScreen,
                                    locals: {
                                        data: DialogModel
                                    }
                                })
                                    .then(function (answer) {
                                        console.log('Click ' + answer);
                                    }, function () {
                                        console.log('Click Close');
                                    });

                                $scope.$watch(function () {
                                    return $mdMedia('xs') || $mdMedia('sm');
                                }, function (wantsFullScreen) {
                                    $scope.customFullscreen = (wantsFullScreen === true);
                                });
                            }

                            //Advanced Dialog
                            function advancedDialog(ev, DialogModel) {
                                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
                                $mdDialog.show({
                                    controller: DialogController,
                                    templateUrl: 'src/modules/md-dialog/dialog-template.html',
                                    parent: angular.element(document.body),
                                    targetEvent: ev,
                                    clickOutsideToClose: true,
                                    fullscreen: useFullScreen,
                                    locals: {
                                        data: DialogModel
                                    }
                                })
                                    .then(function (answer) {
                                        console.log('Click ' + answer);
                                    }, function () {
                                        console.log('Click Close');
                                    });

                                $scope.$watch(function () {
                                    return $mdMedia('xs') || $mdMedia('sm');
                                }, function (wantsFullScreen) {
                                    $scope.customFullscreen = (wantsFullScreen === true);
                                });
                            }


                            //List Dialog
                            function listDialog(ev, DialogModel) {
                                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
                                $mdDialog.show({
                                    controller: DialogController,
                                    templateUrl: 'src/modules/md-dialog/list-template.html',
                                    parent: angular.element(document.body),
                                    targetEvent: ev,
                                    clickOutsideToClose: true,
                                    fullscreen: useFullScreen,
                                    locals: {
                                        data: DialogModel
                                    }
                                })
                                    .then(function (answer) {
                                        console.log('Click ' + answer);
                                    }, function () {
                                        console.log('Click Close');
                                    });

                                $scope.$watch(function () {
                                    return $mdMedia('xs') || $mdMedia('sm');
                                }, function (wantsFullScreen) {
                                    $scope.customFullscreen = (wantsFullScreen === true);
                                });
                            }

                            //Form Dialog
                            function formDialog(ev, DialogModel) {
                                var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
                                $mdDialog.show({
                                    controller: DialogController,
                                    templateUrl: 'src/modules/md-dialog/form-template.html',
                                    parent: angular.element(document.body),
                                    targetEvent: ev,
                                    clickOutsideToClose: false,
                                    fullscreen: useFullScreen,
                                    locals: {
                                        data: DialogModel
                                    }
                                })
                                    .then(function (answer) {
                                        console.log('Click ' + answer);
                                    }, function () {
                                        console.log('Click Close');
                                    });

                                $scope.$watch(function () {
                                    return $mdMedia('xs') || $mdMedia('sm');
                                }, function (wantsFullScreen) {
                                    $scope.customFullscreen = (wantsFullScreen === true);
                                });
                            }

                            function DialogController($scope, $mdDialog, data) {
                                $scope.data = data;
                                $scope.general = 'Male';
                                $scope.date = new Date();

                                $scope.hide = function () {
                                    $mdDialog.hide();
                                };
                                $scope.cancel = function () {
                                    $mdDialog.cancel();
                                };
                                $scope.answer = function (answer) {
                                    $mdDialog.hide(answer);
                                };
                            }
                        }
                    }
                }
            })
        });
})();