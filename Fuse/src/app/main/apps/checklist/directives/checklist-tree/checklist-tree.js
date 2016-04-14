(function(){
	'use strict';

	var module = angular.module('app.checklist');

	module.directive('checklistTree', function(){
		return {
			replace: false,
			restrict: 'A',
			templateUrl: 'app/main/apps/checklist/directives/checklist-tree/checklist-tree.html',
			controller: 'ChecklistTreeCtrl',
			scope: true
		};
	});

	module.controller('ChecklistTreeCtrl', function($scope, auth, tasks, tasksMock){
		tasks.get().then(function(response){
			$scope.checklist = response.tasks;
			prettifyTaskTasks(response);
		});

		function prettifyTaskTasks(task){
			var i;
			if(task.tasks==null){
				task.tasks = {};
			}
			if(task.tasks.tasks==null){
				task.tasks.tasks = [];
			}
			for(i=0; i<task.tasks.tasks.length; i++){
				prettifyTaskTasks(task.tasks.tasks[i]);
			}
		}

		$scope.options = {
			dropped: function(e){
				var destination = null, index = e.source.nodeScope.index();
				if(e.dest.nodesScope.task!=null){
					destination = e.dest.nodesScope.task.id;
				}
				if(index<0) index=0;
				tasks.update(e.source.nodeScope.task.id, destination, index).then(function(response){
					console.log(response);
				});
			}
		};

		// console.log(tasksMock);
		// $scope.options2 = {
		// 	dropped: function(e){
		// 		console.log(e.dest.nodeScope.task);
		// 		console.log(e.source.nodeScope.task);
		// 	}
		// };

		// $scope.checklist2 = [
		// 	{
		// 		id: 0,
		// 		name: 'Task 1',
		// 		notes: 'Task 1 description',
		// 		tasks: {
		// 			tasks: [
		// 				{
		// 					id: 100,
		// 					notes: 'SubTask 1 description',
		// 					name: 'SubTask 1',
		// 					tasks: {
		// 						tasks: [
		// 							{
		// 								id: 200,
		// 								notes: 'SubSubTask 1 description',
		// 								name: 'SubSubTask 1',
		// 								tasks: {
		// 									tasks: []
		// 								}
		// 							}
		// 						]
		// 					}
		// 				},
		// 				{
		// 					id: 101,
		// 					notes: 'SubTask 2 description',
		// 					name: 'SubTask 2',
		// 					tasks: {
		// 						tasks: []
		// 					}
		// 				},
		// 				{
		// 					id: 102,
		// 					notes: 'SubTask 3 description',
		// 					name: 'SubTask 3',
		// 					tasks: {
		// 						tasks: []
		// 					}
		// 				}
		// 			]
		// 		}
		// 	},
		// 	{
		// 		id: 1,
		// 		name: 'Task 2',
		// 		notes: 'Task 2 description',
		// 		tasks: {
		// 			tasks: [
		// 				{
		// 					id: 103,
		// 					notes: 'SubTask 4 description',
		// 					name: 'SubTask 4',
		// 					tasks: {
		// 						tasks: []
		// 					}
		// 				},
		// 				{
		// 					id: 104,
		// 					notes: 'SubTask 5 description',
		// 					name: 'SubTask 5',
		// 					tasks: {
		// 						tasks: []
		// 					}
		// 				}
		// 			]
		// 		}
		// 	}
		// ];
	});
})();