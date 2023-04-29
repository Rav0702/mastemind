import {IResponse} from "../board/components/response-slot/response-slot.component";

export class MiniMaxGame {
  readonly NUM_OF_PEGS = 4;
  readonly NUM_OF_COLORS = 6;
  private space: boolean[];
  turn = 0;



  constructor() {
    this.space = this.initializeSpace();

  }

  initializeSpace(): boolean[] {
    return Array(1296).fill(true);
  }

  getCode(index: number): number[] {
    let code = [0 ,0, 0, 0];
    for(let i = this.NUM_OF_PEGS-1; i >= 0; i--) {
      code[i] = index % this.NUM_OF_COLORS;
      index = Math.floor(index / 6);
    }
    return code;
  }

  bestGuess(): number[] {
    if(this.turn == 0) {
      this.turn++;
      return this.getCode(7);
    } else {
      let bestGuess: number = -1;
      let bestScore = 1296;
      for(let i = 0; i < this.space.length; i++) {
        if(this.space[i]) {
          let score = this.scoreGuess(this.getCode(i));
          if(score < bestScore) {
            bestScore = score;
            bestGuess = i;
          }
        }
      }
      if(bestGuess === -1) {
        console.error("No best guess found")
        return [];
      }
      this.turn++;
      return this.getCode(bestGuess);
    }
  }

  scoreGuess(guess: number[]): number {
    let score = 0;
    for(let i = 0; i < this.space.length; i++) {
      if(this.space[i]) {
        let response = this.computeResponse(guess, this.getCode(i));
        let responseIndex = this.getResponseIndex(response);
        if(responseIndex === -1) {
          score++;
        }
      }
    }
    return score;
  }

  getResponseIndex(response: IResponse): number {
    let index = 0;
    for(let i = 0; i < response.correct; i++) {
      index += 6 - i;
    }
    index += response.good;
    return index;
  }

  computeResponse(guess: number[], code: number[]): IResponse {
    let good = 0;
    let correct = 0;
    let codeCopy = code.slice();
    let guessCopy = guess.slice();
    for(let i = 0; i < this.NUM_OF_PEGS; i++) {
      if(guessCopy[i] === codeCopy[i]) {
        correct++;
        guessCopy[i] = -1;
        codeCopy[i] = -1;
      }
    }
    for(let i = 0; i < this.NUM_OF_PEGS; i++) {
      if(guessCopy[i] != -1) {
        for(let j = 0; j < this.NUM_OF_PEGS; j++) {
          if(guessCopy[i] === codeCopy[j]) {
            good++;
            guessCopy[i] = -1;
            codeCopy[j] = -1;
          }
        }
      }
    }
    return {good, correct};
  }

  reduceSpace(guess: number[], response: IResponse): void {
    for(let i = 0; i < this.space.length; i++) {
      if(this.space[i]) {
        let code = this.getCode(i);
        let newResponse = this.computeResponse(guess, code);
        if(newResponse.correct != response.correct || newResponse.good != response.good) {
          this.space[i] = false;
        }
      }
    }
    console.log(this.space);
  }



}
