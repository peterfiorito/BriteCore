(function() {
	'use strict';
	
	angular.module('app')
	.component('sideFilters', {
		templateUrl: './sideFilters/sideFilters.html',
		controller: SideFiltersController,
		controllerAs: 'vm'
	});

	SideFiltersController.$inject = ['$scope', '$window'];

	function SideFiltersController($scope, $window) {
		var vm = this;
		$scope.patternCheck = '^[a-zA-Z0-9._-]+$';
		$scope.reg = /^\d+$/;
		var names;

		$scope.userName = function(){
			names = document.getElementById("reference-name").value;
			alert(names);
		}
	}
})();