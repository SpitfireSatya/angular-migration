
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { DummyDowngradeComponent } from './dummy-downgrade/dummy-downgrade.component';

@NgModule({
  declarations: [
    MainComponent,
    DummyDowngradeComponent
  ],
  imports: [],
  providers: [],
  exports: [MainComponent],
  entryComponents: [DummyDowngradeComponent]
})

export class MainModule { }
