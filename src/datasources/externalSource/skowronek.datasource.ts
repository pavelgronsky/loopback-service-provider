import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import {config} from './skowronek.config';

@lifeCycleObserver('datasource')
export class SkowronekRestDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'skowronekRest';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.skowronekRest', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
