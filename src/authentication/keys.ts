import {BindingKey} from '@loopback/context';
import { SkowronekService } from '../services';


export namespace SkowronekServiceBinding {
  // export const SKOWRONEK_SERVICE = BindingKey.create<SkowronekService>(
  //   'services.SkowronekService',
  // );
  export const SKOWRONEK_SERVICE = 'services.SkowronekService';
}
