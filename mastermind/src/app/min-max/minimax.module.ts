import {NgModule} from "@angular/core";
import { MinimaxGameComponent } from './components/minimax-game/minimax-game.component';
import {MinimaxRoutingModule} from "./minimax-routing.module";
import {BoardModule} from "../board/board.module";
import {MatButtonModule} from "@angular/material/button";
import {NgIf} from "@angular/common";


@NgModule({
  declarations: [
    MinimaxGameComponent
  ],
  imports: [
    MinimaxRoutingModule,
    BoardModule,
    MatButtonModule,
    NgIf
  ],
  providers: [],
  bootstrap: []
})
export class MinimaxModule { }
