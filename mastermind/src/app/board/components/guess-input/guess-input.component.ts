import {Component, EventEmitter, Output} from '@angular/core';
import {GuessColors} from "../../../core/constants/game/colors.enum";

@Component({
  selector: 'app-guess-input',
  templateUrl: './guess-input.component.html',
  styleUrls: ['./guess-input.component.scss']
})
export class GuessInputComponent {
  readonly colors = [GuessColors.RED, GuessColors.BLUE, GuessColors.GREEN, GuessColors.YELLOW, GuessColors.PURPLE, GuessColors.BROWN];
  choiceNumber = 0;
  choices: number[] = [-1, -1, -1, -1];

  @Output() guess = new EventEmitter<number[]>();

  addChoice(color: number) {
    console.log(color);
    if(this.choiceNumber < 4) {
      this.choices[this.choiceNumber] = color;
      this.choiceNumber++;
    }
  }

  submitGuess() {
    this.guess.emit(this.choices);
    this.choiceNumber = 0;
    this.choices = [-1, -1, -1, -1];
  }
}
