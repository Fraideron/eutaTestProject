
import { routerConfig } from './index.route';
import { MainController } from './main/main.controller';
import { ControllPanel } from './cp/cp.controller';

import { UserService } from '../app/components/user.service';
import { TranslationService } from '../app/components/translation.service';

angular.module('eutaTestProject', ['ui.router'])
  .config(routerConfig)
  .service('user', UserService)
  .service('translation', TranslationService)
  .controller('MainController', MainController)
  .controller('ControllPanel', ControllPanel)
