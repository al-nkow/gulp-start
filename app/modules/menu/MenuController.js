angular.module('myApp').controller('MenuCtrl', MenuCtrlFunc);
MenuCtrlFunc.$inject = ['$scope', '$rootScope', '$timeout', '$state'];

function MenuCtrlFunc($scope, $rootScope, $timeout, $state) {
	
	var self = this;
		
	this.$rootScope = $rootScope
	this.$scope     = $scope
	this.$timeout   = $timeout
	this.$state     = $state
	this.hover      = false
	this.settings   = null
	this.menu = [
		{
			name: 'home',
			icon: 'icon-home',
			url: 'root'
		},{
			name: 'about',
			icon: 'icon-monkey',
			url: 'about'
		},{
			name: 'contacts',
			icon: 'icon-bird',
			url: 'contacts'
		}
	]

	this.init = function() {
		console.log('menu controller init');
	}

	this.init();

};