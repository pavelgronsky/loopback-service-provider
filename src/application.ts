import {BootMixin} from '@loopback/boot';
import {ApplicationConfig} from '@loopback/core';
import {
  RestExplorerBindings,
  RestExplorerComponent,
} from '@loopback/rest-explorer';
import {RepositoryMixin, SchemaMigrationOptions} from '@loopback/repository';
import {RestApplication} from '@loopback/rest';
import {ServiceMixin} from '@loopback/service-proxy';
import path from 'path';
import {MySequence} from './sequence';
import {SkowronekProvider} from './services/skowronek.service';
import {
  SkowronekServiceBinding
} from './authentication/keys';
import {ProductsModelSchemaUpdate} from "./testclass/products"
import {SkowronekRestDataSource} from "./datasources/externalSource/skowronek.datasource"

export {ApplicationConfig};

export class LoopbackServiceProviderApplication extends BootMixin(
  ServiceMixin(RepositoryMixin(RestApplication)),
) {
  constructor(options: ApplicationConfig = {}) {
    super(options);

    this.setUpBindings();

    // Set up the custom sequence
    this.sequence(MySequence);

    // Set up default home page
    this.static('/', path.join(__dirname, '../public'));

    // Customize @loopback/rest-explorer configuration here
    this.configure(RestExplorerBindings.COMPONENT).to({
      path: '/explorer',
    });
    this.component(RestExplorerComponent);

    this.projectRoot = __dirname;
    // Customize @loopback/boot Booter Conventions here
    this.bootOptions = {
      controllers: {
        // Customize ControllerBooter Conventions here
        dirs: ['controllers'],
        extensions: ['.controller.js'],
        nested: true,
      },
    };
  }


  setUpBindings(): void {
    //this.bind(SkowronekServiceBinding.SKOWRONEK_SERVICE).toProvider(SkowronekProvider)   
    this.bind('datasources.config.skowronekRest').toClass(SkowronekRestDataSource)   
  }


  async migrateSchema(options?: SchemaMigrationOptions): Promise<void> {
    await super.migrateSchema(options);
    
    const productsModelSchemaUpdate = new ProductsModelSchemaUpdate()
    await productsModelSchemaUpdate.startService();
  }
}
