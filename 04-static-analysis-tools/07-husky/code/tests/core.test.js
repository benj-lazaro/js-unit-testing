import { it, expect, describe, beforeEach } from 'vitest';
import { Stack } from '../src/core';

describe('Stack', () => {
  let stack;

  // Setup before each test case
  beforeEach(() => {
    stack = new Stack();
  });

  it('push should add an item to the stack', () => {
    stack.push(1);

    expect(stack.size()).toBe(1);
  });

  it('pop should remove and return the top item from the stack', () => {
    stack.push(1);
    stack.push(2);

    const poppedItem = stack.pop();

    expect(poppedItem).toBe(2);
    expect(stack.size()).toBe(1);
  });

  it('pop should throw an error if stack is empty', () => {
    // Call the function within a callback function in order to catch an error
    expect(() => stack.pop()).toThrow(/empty/i);
  });

  it('peek should return the top item from the stack without removing it', () => {
    stack.push(1);
    stack.push(2);

    const peekedItem = stack.peek();

    expect(peekedItem).toBe(2);
    expect(stack.size()).toBe(2);
  });

  it('peek should throw an error if stack is empty', () => {
    expect(() => stack.peek()).toThrow(/empty/i);
  });

  it('isEmpty should return true if stack is empty', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('isEmpty should return false if stack is NOT empty', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.isEmpty()).toBe(false);
  });

  it('size should return the current number of items in an array', () => {
    stack.push(1);
    stack.push(2);

    expect(stack.size()).toBe(2);
  });

  it('clear should remove all items from the stack', () => {
    stack.push(1);
    stack.push(2);

    stack.clear();

    expect(stack.size()).toBe(0);
  });
});
