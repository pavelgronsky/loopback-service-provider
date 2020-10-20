import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {SkowronekDataSource} from '../datasources';

export interface Skowronek {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getTaxRuleGroup(): Promise<any>;
}

export class SkowronekProvider implements Provider<Skowronek> {
  constructor(
    // Skowronek must match the name property in the datasource json file
    @inject('datasources.Skowronek')
    protected dataSource: SkowronekDataSource = new SkowronekDataSource(),
  ) {}

  value(): Promise<Skowronek> {
    return getService(this.dataSource);
  }
}
