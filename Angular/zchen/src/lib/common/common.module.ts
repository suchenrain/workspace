import { NgModule, Provider, ModuleWithProviders } from '@angular/core';
import { WindowRef } from './in-viewport/window/window-ref.service';

import { InViewportDirective } from './in-viewport/in-viewport.directive';

const defaultProviders: Array<Provider> = [{ provide: WindowRef, useValue: window }];
/**
 * A simple lightweight library for Angular with other dependencies
 * that detects when an element is within the browser viewport and adds a
 * zc-viewport-in or zc-viewport-out class to the element.
 *
 * @export
 * @class InViewportModule
 */
@NgModule({
  declarations: [InViewportDirective],
  exports: [InViewportDirective]
})
export class SharedModule {
  /**
   * Specify a static method for root module to ensure providers are only provided once
   * but allows the module to still be imported into other modules without reproviding
   * services.
   * @static
   * @param {Provider[]} [providers=defaultProviders]
   * @returns {ModuleWithProviders}
   * @memberof InViewportModule
   */
  public static forRoot(providers: Provider[] = defaultProviders): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: providers
    };
  }
}
