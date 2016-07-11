'use strict';
import angular from 'angular';
import router from './router';
import pageAbout from './pages/about/page';
import pageWelcome from './pages/welcome/page';

const app = angular.module('App', ['ngRoute',
  pageAbout.name,
  pageWelcome.name
])
  .config(router);

export default app;
