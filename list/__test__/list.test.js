'use strict';

// These 2 should be interchangeable!
// const List = require('../list.js');
const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pops items from the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    expect(stuff.pop()).toBe('a');
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('removes the first item of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.shift();
    expect(stuff.length).toEqual(1);
    expect(stuff.shift()).toEqual('b');
  });

  it('unshifts items to the beginning of the data set', () => {
    let stuff = new List();
    stuff.unshift('a');
    stuff.unshift('b');
    stuff.unshift('d', 'f', 'g');
    expect(stuff.length).toEqual(5);
    expect(stuff.data[0]).toEqual('g');
    expect(stuff.unshift('c')).toEqual(6);
  });

  it('forEach should run an action for each item in the data set', () => {
    let count = 0;
    let stuff = new List();
    stuff.push('a');
    stuff.unshift('b');
    stuff.forEach(Object.values(stuff.data), () => count++);
    expect(count).toBe(2);
  });
});
