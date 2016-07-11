'use strict';
import 'angular-route';

router.$inject = ['$routeProvider'];
export default function router($routeProvider) {
  $routeProvider.when('/welcome', {
    templateUrl: '/src/pages/welcome/welcome.html',
    reloadOnSearch: false
  });
}
