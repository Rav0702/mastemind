import {Component, OnInit} from '@angular/core';
import {IResponse} from "../../../board/components/response-slot/response-slot.component";
import {MiniMaxGame} from "../../game.interface";

@Component({
  selector: 'app-minimax-game',
  templateUrl: './minimax-game.component.html',
  styleUrls: ['./minimax-game.component.scss']
})
export class MinimaxGameComponent implements OnInit{
  NUM_OF_ROWS = 12;
  NUM_OF_PEGS = 4;
  tour = 0;
  showWin = false;
  code: number[] = [];
  responses: IResponse[] = [];

  board: number[][] = [];
  game: MiniMaxGame = {} as MiniMaxGame;

  showStart = true;

  ngOnInit() {
    this.game = new MiniMaxGame();
    this.initializeBoard();
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

  startGame() {
    this.showStart = false;
    this.board[this.tour] = this.game.bestGuess();
  }

  handleResponse($event: IResponse) {
    if(this.tour < this.NUM_OF_ROWS) {
      console.log($event);
      if($event.correct === 4) {
        this.showWin = true;
      } else {
        this.responses[this.tour] = $event;
        this.game.reduceSpace(this.board[this.tour], $event);
        this.tour++;
        this.board[this.tour] = this.game.bestGuess();
      }
    }
  }

  resetGame() {
    this.tour = 0;
    this.showWin = false;
    this.board = [];
    this.responses = [];
    this.game = new MiniMaxGame();
    this.initializeBoard();
    this.showStart = true;
  }
}
