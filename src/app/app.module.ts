import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {NameService} from './name.service';
import {UniqueValidatorDirective} from './uniqueValidator.directive';

@NgModule({
  declarations: [
    AppComponent,
      UniqueValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }

