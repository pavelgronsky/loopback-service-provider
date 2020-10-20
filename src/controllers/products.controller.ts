import {inject} from '@loopback/core';
import {get} from '@loopback/openapi-v3';
import {SkowronekServiceBinding} from '../keys';
import {Skowronek} from '../services';

export class ProductsController {
  constructor(
    @inject(SkowronekServiceBinding.SKOWRONEK_SERVICE)
    protected skowronekService: Skowronek,
  ) {}

  @get('/v1/products')
  async greetV1() {
    return this.skowronekService.getTaxRuleGroup();
  }
}
