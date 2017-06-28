/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { ControllPanel } from './cp/cp.controller';

import { UserService } from '../app/components/user.service';
import { TranslationService } from '../app/components/translation.service';


angular.module('eutaTestProject', ['ui.router', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('user', UserService)
  .service('translation', TranslationService)
  .controller('MainController', MainController)
  .controller('ControllPanel', ControllPanel)
