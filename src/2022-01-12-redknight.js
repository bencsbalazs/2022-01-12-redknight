import { Knight } from './knight';

class Redknight {
  constructor(verticalKnight, horizontalPawn) {
    this.knight = new Knight(verticalKnight);
    this.wPawn = {};
    this.wPawn.x = horizontalPawn;
    this.wPawn.y = 0;
    this.wPawn.history = [{ x: horizontalPawn, y: 0 }];
    this.bPawn = {};
    this.bPawn.x = horizontalPawn;
    this.bPawn.y = 1;
    this.bPawn.history = [{ x: horizontalPawn, y: 1 }];
    this.result = ['White', 2];
  }
}

module.exports = { Redknight };
