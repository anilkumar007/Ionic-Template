(function (){
	'use strict';
	angular.module('starter').controller('HomeCtrl', ['$scope',HomeCtrl]);
	function HomeCtrl($scope)
	{
		console.log('Entered in home ctrl');
		$scope.items=['resources', 'gmetrics', 'gfeed', 'googleforms', 'social']

	}
})();