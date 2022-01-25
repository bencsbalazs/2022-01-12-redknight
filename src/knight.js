class Knight {
  constructor(verticalKnight) {
    this.x = 0;
    this.y = verticalKnight;
    this.history = [{ x: 0, y: verticalKnight }];
    this.step = { y: true };
  }

  move() {
    this.y += this.step.y;
  }
}

module.exports = { Knight };
