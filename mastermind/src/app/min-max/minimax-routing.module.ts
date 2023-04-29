import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MinimaxGameComponent} from "./components/minimax-game/minimax-game.component";

const routes: Routes = [
  {
    path: '',
    component: MinimaxGameComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinimaxRoutingModule {}
