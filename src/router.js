'use strict';
import "angular-route";

router.$inject = ['$routeProvider'];
export default function router($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'src/test.html',
            reloadOnSearch: false
        })
        .otherwise({
            redirectTo: '/home'
        });
}


