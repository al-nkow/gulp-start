angular.module('myApp.home', []).controller('HomeCtrl', HomeCtrlFunc);
HomeCtrlFunc.$inject = ['$scope', '$rootScope'];

function HomeCtrlFunc($scope, $rootScope) {
	
	var self = this;

	this.$rootScope = $rootScope
	this.loading  = false;

	this.init = function() {
		console.log('home page');
	}

	this.init();

};