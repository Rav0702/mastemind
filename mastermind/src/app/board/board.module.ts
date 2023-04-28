import {PegComponent} from "./components/peg/peg.component";
import {NgModule} from "@angular/core";
import { GuessInputComponent } from './components/guess-input/guess-input.component';
import {MatButtonModule} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import { ResponseSlotComponent } from './components/response-slot/response-slot.component';


@NgModule({
  declarations: [
    PegComponent,
    GuessInputComponent,
    ResponseSlotComponent
  ],
  imports: [
    MatButtonModule,
    NgForOf
  ],
  exports: [PegComponent, GuessInputComponent, ResponseSlotComponent],
  providers: [],
  bootstrap: []
})
export class BoardModule { }
