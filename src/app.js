'use strict';

import angular from 'angular';
import router from './router';

const app = angular.module('App', ['ngRoute']).config(router);

export default app;
