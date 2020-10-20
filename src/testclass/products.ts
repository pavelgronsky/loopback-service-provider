import {inject, Context} from '@loopback/core';
import { SkowronekService } from '../services';
import {SkowronekServiceBinding} from '../authentication/keys';
import {LoopbackServiceProviderApplication} from "../application"

export class ProductsModelSchemaUpdate {
  public app = new LoopbackServiceProviderApplication

    @inject(SkowronekServiceBinding.SKOWRONEK_SERVICE)
    public skowronekServiceProp: SkowronekService

    constructor(
      ) {}
      
      public async startService() {

        await this.runService()
      }


      async runService(){
        const skowronekService = await this.app.get<SkowronekService>(SkowronekServiceBinding.SKOWRONEK_SERVICE); 
        let skowronekServiceProp = await this.skowronekServiceProp.getTaxRuleGroup()
      }
}