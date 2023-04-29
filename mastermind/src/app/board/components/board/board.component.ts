import {Component, Input} from '@angular/core';
import {IResponse} from "../response-slot/response-slot.component";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  @Input()
  board: number[][] = [];

  @Input()
  responses: IResponse[] = [];
}
