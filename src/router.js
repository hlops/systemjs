'use strict';
import 'angular-route';

router.$inject = ['$routeProvider'];
export default function router($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/welcome'
  });
}
