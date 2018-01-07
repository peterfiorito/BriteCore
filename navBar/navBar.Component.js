(function() {
	'use strict';
	
	angular.module('app')
	.component('navBar', {
		templateUrl: './navBar/navBar.html',
		controller: NavBarController,
		controllerAs: 'vm'
	});

	NavBarController.$inject = ['$scope', '$window'];

	function NavBarController($scope, $window) {
		var vm = this;
	}
})();