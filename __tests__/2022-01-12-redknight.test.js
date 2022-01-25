const { Redknight } = require('../src/2022-01-12-redknight');
const { Knight } = require('../src/knight');

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
    expect(redKnight.knight.x).toBeDefined();
  });
  it('Red knight should have vertical position', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.knight.y).toBeDefined();
  });
  it('White pawn should have horizontal position', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.wPawn.x).toBeTruthy();
  });
  it('White pawn should have vertical position', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.wPawn.y).toBeDefined();
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
  it('Red knight position history must be an array with at least one element that has to have two fields', () => {
    const redKnight = new Redknight(0, 8);
    expect(Object.keys(redKnight.knight.history[0]).length).toBe(2);
  });

  it('White pawn position history must be an array', () => {
    const redKnight = new Redknight(0, 8);
    expect(Array.isArray(redKnight.wPawn.history)).toBe(true);
  });
  it('White pawn position history must be at least one element array', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.wPawn.history.length).toBeGreaterThanOrEqual(1);
  });
  it('White pawn position history must be an array with at least one element that has to have two fields', () => {
    const redKnight = new Redknight(0, 8);
    expect(Object.keys(redKnight.wPawn.history[0]).length).toBe(2);
  });

  it('Black pawn position history must be an array', () => {
    const redKnight = new Redknight(0, 8);
    expect(Array.isArray(redKnight.bPawn.history)).toBe(true);
  });
  it('Black pawn position history must be at least one element array', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.bPawn.history.length).toBeGreaterThanOrEqual(1);
  });
  it('Black pawn position history must be an array with at least one element that has to have two fields', () => {
    const redKnight = new Redknight(0, 8);
    expect(Object.keys(redKnight.bPawn.history[0]).length).toBe(2);
  });

  it('First input parameter is the vertical position of the red knight', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.knight.history[0].y).toBe(0);
  });

  it('Initial horizontal position of the red knight is always 0', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.knight.history[0].x).toBe(0);
  });

  it('Second input parameter is the horizontal positon of the white pawn', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.wPawn.history[0].x).toBe(8);
  });

  it('Second input parameter is the horizontal positon of the black pawn', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.bPawn.history[0].x).toBe(8);
  });

  it('The initial verical position of the white pawn is always 0', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.wPawn.history[0].y).toBe(0);
  });

  it('The initial verical position of the black pawn is always 1', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.bPawn.history[0].y).toBe(1);
  });

  it('The game should return some result', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.result).toBeDefined();
  });

  it('The result of the game should be an array', () => {
    const redKnight = new Redknight(0, 8);
    expect(Array.isArray(redKnight.result)).toBe(true);
  });

  it('Game result should be an array with 2 elements', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.result.length).toBe(2);
  });

  it('The first element of the result should be Black or White', () => {
    const redKnight = new Redknight(0, 8);
    expect(['Black', 'White'].includes(redKnight.result[0])).toBe(true);
  });
  it('The second element is a number', () => {
    const redKnight = new Redknight(0, 8);
    expect(typeof redKnight.result[1]).toBe('number');
  });
});

describe('Test the movements', () => {
  it('Knight should have a step rule', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.knight.step).toBeDefined();
  });
  it('Step rule should be an object', () => {
    const redKnight = new Redknight(0, 8);
    expect(typeof redKnight.knight.step).toBe('object');
  });
  it('Step rule object should have a vertical value', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.knight.step.y).toBeDefined();
  });
  it('Knight should be able to move', () => {
    const redKnight = new Redknight(0, 8);
    expect(redKnight.knight.move).toBeDefined();
  });
  it('move should be a function', () => {
    const redKnight = new Redknight(0, 8);
    expect(typeof redKnight.knight.move).toBe('function');
  });
  it('move should change the vertical position of the knight', () => {
    const redKnight = new Redknight(0, 8);
    redKnight.knight.move();
    expect(redKnight.knight.y).not.toEqual(redKnight.knight.history[0].y);
  });
});
