'use strict';
import angular from 'angular';
import templates from './templates';
import router from './router';
import aboutController from './AboutController';

const app = angular.module('page-about', ['ngRoute'])
  .run(templates)
  .config(router)
  .controller('AboutController', aboutController);

export default app;
