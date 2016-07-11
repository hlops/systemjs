'use strict';
import angular from 'angular';
import templates from './templates';
import router from './router';

const app = angular.module('page-welcome', ['ngRoute'])
  .run(templates)
  .config(router);

export default app;
