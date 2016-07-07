import app from './app';
import angular from 'angular';
import angularMaterial from 'angular-material';
import ngRoute from 'angular-route';

import 'angular-material/angular-material.css';

angular.element(document).ready(function () {
  angular.bootstrap(document, [app.name]);
});