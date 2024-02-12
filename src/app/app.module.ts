import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PassengerListComponent } from './shared/components/passenger-list/passenger-list.component';
import { PassengerCardComponent } from './shared/components/passenger-card/passenger-card.component';
import { FormsModule } from '@angular/forms';
import { CountDirective } from './shared/directive/count.directive';
import { CountPipe } from './shared/components/pipes/count.pipe';
import { OnclickDirective } from './shared/directive/onclick.directive';
import { OneditDirective } from './shared/directive/onedit.directive';

@NgModule({
  declarations: [
    AppComponent,
    PassengerListComponent,
    PassengerCardComponent,
    CountDirective,
    CountPipe,
    OnclickDirective,
    OneditDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
