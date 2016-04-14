(function(){
	'use strict';

	var module = angular.module('app.core');

	module.service('auth', function($http){
		var auth = {
			token: "777fb468-3da8-4a80-a5d6-297774784c4a",
			login: function login(){
				var url = 'https://api.checklist.com/oauth/token';
				return $http.get(url, {
					params: {
						client_id: 'checklist',
						grant_type: 'password',
						username: 'tarash@steelkiwi.com',
						password: 'qwer1234',
						response_type: 'token',
						scope: 'read'
					}
				}).then(function(result){
					console.log(result);
					auth.token = result.access_token;
				});
			},
		};
		return auth;
	});

	module.service('tasks', function($http, auth){
		return {
			get: function(){
				return $http({
					method: 'GET',
					url: 'https://api.checklist.com/rest/v1/users/full.json?access_token='+auth.token
				}).then(function(result){
					return result.data;
				});
			},
			update: function(taskId, destination, position){
				var url = 'https://api.checklist.com/rest/v1/tasks/'+ taskId +'/move.json';
				return $http.put(url, {}, {
					params: {
						access_token: auth.token,
						destination: destination,
						position: position
					}
				});
			}
		};
	});
})();