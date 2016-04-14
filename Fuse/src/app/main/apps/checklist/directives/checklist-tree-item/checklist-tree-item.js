(function(){
	'use strict';

	var module = angular.module('app.checklist');

	module.directive('checklistTreeItem', function($compile){
		return {
			replace: false,
			restrict: 'A',
			templateUrl: 'app/main/apps/checklist/directives/checklist-tree-item/checklist-tree-item.html',
			controller: 'ChecklistTreeItemCtrl',
			scope: true,
			link: function(scope, element, attrs){
				if(angular.isArray(scope.task.tasks.tasks)){
					element.parent().append(""+
						"<div class='subtasks'>" +
							"<ol ui-tree-nodes='' ng-model='task.tasks.tasks' >"+
						        "<li ng-repeat='task in task.tasks.tasks' ui-tree-node>"+
						            "<div checklist-tree-item></div>"+
						        "</li>"+
						    "</ol>"+
					    "</div>"
					);
					$compile(element.siblings('.subtasks').contents())(scope);
				}
			}
		};
	});

	module.controller('ChecklistTreeItemCtrl', function($scope){
	});
})();