import {BindingKey} from '@loopback/core';
import {Products} from './testclass/products';
import {Skowronek} from './services';

export namespace SkowronekServiceBinding {
  export const SKOWRONEK_SERVICE = BindingKey.create<Skowronek>(
    'services.Skowronek',
  );
}

export namespace ProductsBinding {
  export const PRODUCTS_SCHEMA = BindingKey.create<Products>(
    'migration.Products',
  );
}
