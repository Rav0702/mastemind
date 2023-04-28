import {NgModule} from "@angular/core";
import { GuessGameComponent } from './components/guess-game/guess-game.component';
import {GuessRoutingModule} from "./guess-routing.module";
import {NgForOf} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import {BoardModule} from "../board/board.module";


@NgModule({
  declarations: [
    GuessGameComponent
  ],
  imports: [
    GuessRoutingModule,
    NgForOf,
    SharedModule,
    BoardModule
  ],
  providers: [],
  bootstrap: []
})
export class GuessModule { }
