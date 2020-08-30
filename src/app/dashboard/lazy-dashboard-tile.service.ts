import { Injectable, Injector, NgModuleFactoryLoader, NgModuleRef } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LazyDashboardTileService  {

    constructor(
        private loader: NgModuleFactoryLoader,
        private injector: Injector
    ) {
    }

    private moduleRef: {[s: string]: NgModuleRef<any>} = {};

    load(componentName): Promise<void> {

        if (this.moduleRef[componentName]) {
            return Promise.resolve();
        }

        const moduleName = componentName.split('-').map(name => name.charAt(0).toUpperCase() + name.slice(1)).join('').concat('Module');
        const path = `src/app/dashboard/lazy/${componentName}/${componentName}.module#${moduleName}`;
        return this
            .loader
            .load(path)
            .then(moduleFactory => {
                this.moduleRef[componentName] = moduleFactory.create(this.injector).instance;
                console.debug('moduleRef', this.moduleRef);
            })
            .catch(err => {
                console.error('error loading module', err);
            });
    }
}
