'use strict';
import 'angular-route';

router.$inject = ['$routeProvider'];
export default function router($routeProvider) {
  $routeProvider.when('/about', {
    templateUrl: '/src/pages/about/about.html',
    reloadOnSearch: false
  });
}
