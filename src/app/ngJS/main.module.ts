
import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

import { MainComponent } from './main.component';

const ng1App: ng.IModule = angular.module('ng1App', ['ui.router', 'ui.bootstrap']);

ng1App.component('mainComponent', new MainComponent());

// TODO: Fix typings for ui-router
ng1App.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
  ($locationProvider: ng.ILocationProvider, $stateProvider: any,
  $urlRouterProvider: any) => {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
      .state('main', {
          url: '/ng1/main',
          template: '<main-component><main-component>',
      });

    /*$urlRouterProvider.otherwise('/');*/

}]);
