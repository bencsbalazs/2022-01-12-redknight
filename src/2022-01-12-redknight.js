class Redknight {
  constructor(params) {
    this.params = params;
    this.knight = {};
    this.knight.x = true;
    this.knight.y = true;
    this.knight.history = [{}];
    this.wPawn = {};
    this.wPawn.x = true;
    this.wPawn.y = true;
    this.wPawn.history = true;
    this.bPawn = {};
    this.bPawn.x = true;
    this.bPawn.y = true;
    this.bPawn.history = true;
  }
}

module.exports = { Redknight };
