import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoutesConstants} from "./core/constants/routes/routes.constant";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: RoutesConstants.GUESS,
    loadChildren: () => import('./guess/guess.module').then(m => m.GuessModule),
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
