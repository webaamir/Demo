import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
import { GooglePlaceSearchComponent } from './google-place-search/google-place-search.component';
import { FormsModule } from '@angular/forms';
import { UserSelectionService } from './google-place-search/user-selection.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GooglePlaceSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    AppRoutingModule,
    NgbTypeaheadModule,
    FormsModule
  ],
  providers: [UserSelectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
