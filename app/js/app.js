var myApp = angular.module('myApp', [
    'ui.router',
    'myApp.home',
    'myApp.about'
    ]);

// ------------- ROUTE -------------
myApp.config(myroute);
myroute.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function myroute($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('root', {
            url: '/',
            views: {
                'content': {
                    templateUrl: 'templates/home/home.html',
                    controller: 'HomeCtrl as vc'
                }
            }
        })
        .state('about', {
            url: '/about',
            views: {
                'content': {
                    templateUrl: 'templates/about/about.page.html',
                    controller: 'AboutCtrl as vc'
                }
            }
        })
        .state('contacts', {
            url: '/contacts',
            views: {
                'content': {
                    templateUrl: 'templates/contacts/contacts.page.html'
                }
            }   
        });

    /*$locationProvider.html5Mode({
        requireBase: false,
        enabled: true
    });*/

};
// ------------- eof ROUTE -------------

// ------------- RUN -------------
myApp.run(runFunc);
runFunc.$inject = ['$state', '$rootScope'];
function runFunc($state, $rootScope) {

    $rootScope.user = {}
    $rootScope.theme = 1

    // $rootScope.mainpage = true;
    // $rootScope.admin    = '';

    // $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

    //     $rootScope.mainpage = toState.name == 'root' ? true : false;

    //     // if (toState.name.indexOf('tool') > -1 && !$cookies.Session) {
    //     //     // If logged out and transitioning to a logged in page:
    //     //     e.preventDefault();
    //     //     $state.go('public.login');
    //     // } else if (toState.name.indexOf('public') > -1 && $cookies.Session) {
    //     //     // If logged in and transitioning to a logged out page:
    //     //     e.preventDefault();
    //     //     $state.go('tool.suggestions');
    //     // };

    // });
};
// ------------- eof RUN -------------
