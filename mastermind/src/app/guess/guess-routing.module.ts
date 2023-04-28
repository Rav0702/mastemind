import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {GuessGameComponent} from "./components/guess-game/guess-game.component";

const routes: Routes = [
  {
    path: '',
    component: GuessGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuessRoutingModule {}
