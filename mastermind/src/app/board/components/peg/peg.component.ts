import {Component, Input} from '@angular/core';
import {GuessColors} from "../../../core/constants/game/colors.enum";

@Component({
  selector: 'app-peg',
  templateUrl: './peg.component.html',
  styleUrls: ['./peg.component.scss']
})
export class PegComponent {
 readonly colors = [GuessColors.RED, GuessColors.BLUE, GuessColors.GREEN, GuessColors.YELLOW, GuessColors.PURPLE, GuessColors.BROWN];

  _color: string = GuessColors.GREY;
 @Input() set color(color: number) {
   if(color >= 0) {
     this._color = this.colors[color];
   }
 }
}
