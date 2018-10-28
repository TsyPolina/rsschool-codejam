const assert = require('assert');
Object.freeze(assert);
const sumOfOther = require('./src/sumOfOther');
const make = require('./src/make');
const recursion = require('./src/recursion');

const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;

const firstTree = {}; 
const secondTree = {value: 1, left: {value: 2}, right: {value: 3}}; 
const thirdTree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

describe('Test', () => {
  it('Sum Of Other 1', () => {
    const count = sumOfOther([2, 3, 1]);
    assert.deepEqual(count, ([4,3,5]));
  });

  it('Sum Of Other 2', () => {
    const count = sumOfOther([2, 3, 1, 5, 6, 4]);
    assert.deepEqual(count, ([19,18,20,16,15,17]));
  });

  it('Sum Of Other 3', () => {
    const count = sumOfOther([2, 3, 1, 5, 6, 4, 2, 3, 22, 15]);
    assert.deepEqual(count, ([61,60,62,58,57,59,61,60,41,48]));
  });

  it('Sum Of Other 4', () => {
    const count = sumOfOther([3, 3, 3, 3, 3, 3, 3, 3]);
    assert.deepEqual(count, ([21,21,21,21,21,21,21,21]));
  });
  it('Sum Of Other 5', () => {
    const count = sumOfOther([0, 0, 0, 0, 0, 0, 0, 0]);
    assert.deepEqual(count, ([0,0,0,0,0,0,0,0]));
  }); 
 
  it('Make 1', () => {
    const count = make(15)(34, 21, 666)(41)(sum);
    assert.equal(count, 777);
  });
    it('Make 2', () => {
    const count = make(15)(34, 21, 666)(41)(sub);
    assert.equal(count, -747);
  });
  it('Make 3', () => {
    const count = make(15)(34, 21, 666)(41)(mul);
    assert.equal(count, 292447260);
  });
  it('Make 4', () => {
    const count = make(15,5)(34, 21)(41,1,0,3)(sum);
    assert.equal(count, 120);
  });
  it('Make 5', () => {
    const count =make(15,5)(34, 21)(41,1,0,3)(sub);
    assert.equal(count, -90);
  });
  it('Make 6', () => {
    const count = make(15,5)(34, 21)(41,1,0,3)(mul);
    assert.equal(count, 0);
  });

  it('Recursion 1', () => { 
  const result = recursion(firstTree); 
  assert.deepEqual(result, []); 
  }); 

  it('Recursion 2', () => { 
  const result = recursion(secondTree); 
  assert.deepEqual(result, [[1], [2, 3]]); 
  }); 

  it('Recursion 3' , () => { 
  const result = recursion(thirdTree); 
  assert.deepEqual(result, [[100], [90, 120], [70,99,110,130]]); 
  }); 
  
});

