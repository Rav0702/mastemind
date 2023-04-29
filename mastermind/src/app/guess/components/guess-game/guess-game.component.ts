import {Component, OnInit} from '@angular/core';
import {BoardConstant} from "../../../core/constants/game/board.constant";
import {IResponse} from "../../../board/components/response-slot/response-slot.component";

@Component({
  selector: 'app-guess-game',
  templateUrl: './guess-game.component.html',
  styleUrls: ['./guess-game.component.scss']
})
export class GuessGameComponent implements OnInit {
  NUM_OF_ROWS = 12;
  NUM_OF_PEGS = 4;
  tour = 0;
  showWin = false;
  code: number[] = [];
  responses: IResponse[] = [];

  board: number[][] = [];
  constructor() { }

  ngOnInit(): void {
    this.initializeBoard();
    this.initializeCode();
    console.log(this.board);
  }

  initializeBoard() {
    for(let i = 0; i < this.NUM_OF_ROWS; i++) {
      this.board.push([]);
      this.responses.push({} as IResponse);
      for(let j = 0; j < this.NUM_OF_PEGS; j++) {
        this.board[i].push(-1)
      }
    }
  }

  initializeCode() {
    for(let i = 0; i < this.NUM_OF_PEGS; i++) {
      this.code.push(Math.floor(Math.random() * 6));
    }
    console.log(this.code);
  }

  handleGuess($event: number[]) {
      if(this.tour < this.NUM_OF_ROWS) {
        this.board[this.tour] = $event;
        this.responses[this.tour] = this.computeResponse($event);
        this.tour++;
    }
  }

  computeResponse(guess: number[]): IResponse {
    let good = 0;
    let correct = 0;
    let codeCopy = this.code.slice();
    let guessCopy = guess.slice();
    for(let i = 0; i < this.NUM_OF_PEGS; i++) {
      if(guessCopy[i] === codeCopy[i]) {
        correct++;
        guessCopy[i] = -1;
        codeCopy[i] = -1;
      }
    }
    for(let i = 0; i < this.NUM_OF_PEGS; i++) {
      if(guessCopy[i] !== -1) {
        for(let j = 0; j < this.NUM_OF_PEGS; j++) {
          if(guessCopy[i] === codeCopy[j]) {
            good++;
            guessCopy[i] = -1;
            codeCopy[j] = -1;
            break;
          }
        }
      }
    }
    if(correct == this.NUM_OF_PEGS) {
      this.showWin = true;
    }
    return {good, correct};
  }

  handleReset() {
    this.board = [];
    this.responses = [];
    this.tour = 0;
    this.showWin = false;
    this.code = [];
    this.initializeBoard();
    this.initializeCode();
  }


}
