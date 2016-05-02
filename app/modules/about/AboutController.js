angular.module('myApp.about', []).controller('AboutCtrl', AboutCtrlFunc);
AboutCtrlFunc.$inject = ['$scope', '$rootScope', '$timeout'];

function AboutCtrlFunc($scope, $rootScope, $timeout) {
	
	var self = this;

	this.$rootScope = $rootScope;
	this.$scope     = $scope;
	this.tab        = 2;
	
	this.init = function() {
		console.log('--- Initialized AboutController ---');
	}

	this.init();
};

