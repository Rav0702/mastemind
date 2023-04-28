import {Component, Input} from '@angular/core';
import {ResponseColors} from "../../../core/constants/game/colors.enum";

export interface IResponse {
  good: number;
  correct: number;
}
@Component({
  selector: 'app-response-slot',
  templateUrl: './response-slot.component.html',
  styleUrls: ['./response-slot.component.scss']
})
export class ResponseSlotComponent {
  _responses: string[] = [];
  @Input()
  set responses(response: IResponse) {
    this._responses = [];
    for(let i = 0; i < response.good; i++) {
      this._responses.push(ResponseColors.WHITE);
    }
    for(let i = 0; i < response.correct; i++) {
      this._responses.push(ResponseColors.RED);
    }
  }
}
