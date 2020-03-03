import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: environment.production ? [] : [AppComponent]
})
export class AppModule
{
  constructor(private injector: Injector)
  {
    const customButton = createCustomElement(AppComponent, {injector});
    customElements.define('custom-app', customButton);
  }

  ngDoBootstrap() {}
}
