'use strict';
import app from './app';
import angular from 'angular';

angular.element(document).ready(function() {
  angular.bootstrap(document, [app.name], {strictDi: true});
});
