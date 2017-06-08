
import * as angular from 'angular';
import { downgradeComponent } from '@angular/upgrade/static';

import { DummyDowngradeComponent } from './ng/dummy-downgrade/dummy-downgrade.component';

const ng1App = angular.module('ng1App');

ng1App.directive('dummyDowngrade',
  downgradeComponent({component: DummyDowngradeComponent}) as angular.IDirectiveFactory);
