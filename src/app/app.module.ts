import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RefereesComponent } from './referees/referees.component';
import { RefereeListComponent } from './referees/referee-list/referee-list.component';
import { RefereeDetailComponent } from './referees/referee-detail/referee-detail.component';
import { RefereeItemComponent } from './referees/referee-list/referee-item/referee-item.component';
import { RatingsComponent } from './ratings/ratings.component';
import { RatingEditComponent } from './ratings/rating-edit/rating-edit.component';
import { RatingService } from './ratings/rating.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';
import { SelectRefereeComponent } from './referees/select-referee/select-referee.component';
import { RefereeEditComponent } from './referees/referee-edit/referee-edit.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RefereesComponent,
    RefereeListComponent,
    RefereeDetailComponent,
    RefereeItemComponent,
    RatingsComponent,
    RatingEditComponent,
    DropdownDirective,
    SelectRefereeComponent,
    RefereeEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
