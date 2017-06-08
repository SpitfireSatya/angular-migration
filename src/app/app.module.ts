
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';

import { MainModule } from './ng/main.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  ngDoBootstrap() { };
}
