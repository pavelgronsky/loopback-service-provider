import {inject, Context} from '@loopback/core';
import { SkowronekService } from '../services';
import {SkowronekServiceBinding} from '../authentication/keys';

export class ProductsModelSchemaUpdate {

    @inject(SkowronekServiceBinding.SKOWRONEK_SERVICE)
    public skowronekService1: SkowronekService

    constructor(
      ) {}
      
      public async startService() {

        await this.runService()
      }


      async runService(){
        let test22 = await this.skowronekService1.getNewOrdersFullList("test")
      }


}