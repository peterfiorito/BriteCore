(function() {
	'use strict';
	
	angular.module('app')
	.component('mainView', {
		templateUrl: './mainView/mainView.html',
		controller: MainViewController,
		controllerAs: 'vm'
	});

	MainViewController.$inject = ['$scope', '$window'];

	function MainViewController($scope, $window) {
		var vm = this;
	}
})();