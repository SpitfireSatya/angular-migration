
import * as angular from 'angular';
import 'angular-ui-router';

import { MainComponent } from './main.component';

const app: ng.IModule = angular.module('main', ['ui-router', 'ui-bootstrap']);

app.component('mainComponentAngular1', MainComponent);

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
  ($locationProvider, $stateProvider, $urlRouterProvider) => {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
      .state('ngJS', {
          url: '/angular1',
          template: '<main-component-angular1><main-component-angular1>'
      });

    $urlRouterProvider.otherwise('/');

}]);
