import { getService } from '@loopback/service-proxy';
import { Provider, inject } from '@loopback/context';
import { SkowronekRestDataSource } from '../datasources';

export interface SkowronekService {
  getTaxRuleGroup(): Promise<any[]>;
}

export class SkowronekProvider implements Provider<SkowronekService> {
  constructor(
    @inject('datasources.config.skowronekRest')
    protected dataSource: SkowronekRestDataSource,
  ) { }

  value(): Promise<SkowronekService> {
    return getService(this.dataSource);
  }
}
