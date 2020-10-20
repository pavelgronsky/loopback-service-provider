import {CoreBindings, inject} from '@loopback/core';
import {LoopbackServiceProviderApplication} from '../application';
import {SkowronekServiceBinding} from '../keys';
import {Skowronek} from '../services';

export class Products {
  @inject(CoreBindings.APPLICATION_INSTANCE)
  public app: LoopbackServiceProviderApplication;

  @inject(SkowronekServiceBinding.SKOWRONEK_SERVICE)
  public skowronekService: Skowronek;

  async retrieveProducts() {
    console.log(
      'Inside products.ts ',
      await this.skowronekService.getTaxRuleGroup(),
    );
    return this.skowronekService.getTaxRuleGroup();
  }
}
