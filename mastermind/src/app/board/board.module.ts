import {PegComponent} from "./components/peg/peg.component";
import {NgModule} from "@angular/core";
import { GuessInputComponent } from './components/guess-input/guess-input.component';
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import { ResponseSlotComponent } from './components/response-slot/response-slot.component';
import { BoardComponent } from './components/board/board.component';
import { ResetComponent } from './components/reset/reset.component';
import { MinimaxResponseComponent } from './components/minimax-response/minimax-response.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PegComponent,
    GuessInputComponent,
    ResponseSlotComponent,
    BoardComponent,
    ResetComponent,
    MinimaxResponseComponent
  ],
  imports: [
    MatButtonModule,
    NgForOf,
    MatInputModule,
    ReactiveFormsModule
  ],
    exports: [PegComponent, GuessInputComponent, ResponseSlotComponent, BoardComponent, ResetComponent, MinimaxResponseComponent],
  providers: [],
  bootstrap: []
})
export class BoardModule { }
