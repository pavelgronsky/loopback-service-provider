## In servcie folder we have Servcie Provider. This is service for external REST server API

## I added datasource with JSON Path configuration. 

## In application.ts I to bind my servcie by this:
 setUpBindings(): void {
    this.bind(SkowronekServiceBinding.SKOWRONEK_SERVICE).toProvider(SkowronekProvider)   
  }

## In testclass folder I have class example. 