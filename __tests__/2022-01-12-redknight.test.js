const { Redknight } = require('../src/2022-01-12-redknight');

describe('Checking game attributes...', () => {
  it('RedKnight game is created', () => {
    const redKnight = new Redknight();
    expect(redKnight).toBeTruthy();
  });
  it('RedKnight game expects input', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight).toBeTruthy();
  });
  it('Redknight game should have red knight', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.knight).toBeTruthy();
  });
  it('Redknight game should have a white pawn', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.wPawn).toBeTruthy();
  });
  it('Redknight game should have a black pawn', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.bPawn).toBeTruthy();
  });
  it('Red knight should have horizontal position', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.knight.x).toBeTruthy();
  });
  it('Red knight should have vertical position', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.knight.y).toBeTruthy();
  });
  it('White pawn should have horizontal position', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.wPawn.x).toBeTruthy();
  });
  it('White pawn should have vertical position', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.wPawn.y).toBeTruthy();
  });
  it('Black pawn should have horizontal position', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.bPawn.x).toBeTruthy();
  });
  it('Black pawn should have vertical position', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.bPawn.y).toBeTruthy();
  });
  it('Red knight should have position history', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.knight.history).toBeTruthy();
  });
  it('Black pawn should have position history', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.bPawn.history).toBeTruthy();
  });
  it('White pawn should have position history', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.wPawn.history).toBeTruthy();
  });
  it('Red knight position history must be an array', () => {
    const redKnight = new Redknight(0, 8);
    expect(Array.isArray(redKnight.knight.history)).toBe(true);
  });
  it('Red knight position history must be at least one element array', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.knight.history.length).toBeGreaterThanOrEqual(1);
  });
});

describe('User story 2', () => {
  it.skip('', () => {});
  it.skip('', () => {});
});
