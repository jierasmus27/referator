import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RatingsComponent } from './ratings/ratings.component';
import { RefereesComponent } from './referees/referees.component';
import { RefereeDetailComponent } from './referees/referee-detail/referee-detail.component';
import { SelectRefereeComponent } from './referees/select-referee/select-referee.component';

const appRoutes: Routes = [
  { path: 'ratings', component: RatingsComponent },
  { path: 'referees', component: RefereesComponent, children: [
    { path: ':id', component: RefereeDetailComponent },
    { path: '', pathMatch: 'full' , component: SelectRefereeComponent }
  ]},
  { path: '', redirectTo: '/referees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
