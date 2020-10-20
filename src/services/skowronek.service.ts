import {getService} from '@loopback/service-proxy';
import {
  Provider,
  inject,
  BindingTemplate,
  BindingScope,
  BindingFilter,
} from '@loopback/context';
import {extensionFor, bind} from '@loopback/core';
import {SkowronekRestDataSource} from '../datasources';
import {SkowronekServiceBinding} from "../authentication/keys"

export interface SkowronekService {
  getNewOrdersFullList(dateAdd: string): Promise<any[]>;
}

export class SkowronekProvider implements Provider<SkowronekService> {
  constructor(
    @inject('datasources.skowronekRest')
    protected dataSource: SkowronekRestDataSource,
  ) {}

   value(): Promise<SkowronekService> {
    return getService(this.dataSource);
    // const resultPromise = new Promise<SkowronekService>((resolve, reject) => {
    //   let test: Promise<SkowronekService> = getService(this.dataSource);

    //   resolve(test)
    //   reject("Load Skowronek Provider data is faild")
    // })
    // return resultPromise
  }
}
