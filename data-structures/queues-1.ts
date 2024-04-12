/* eslint-disable @typescript-eslint/no-empty-function */
import { validateLocaleAndSetLanguage } from 'typescript';
import { Queue } from './lib/queue';

export function getFront<T>(queue: Queue<T>): T | undefined {
  return queue.peek();
}

export function addToBack<T>(queue: Queue<T>, value: T): void {
  queue.enqueue(value);
}

export function takeFront<T>(queue: Queue<T>): T | undefined {
  if (queue.peek() === undefined) {
    return undefined;
  } else {
    const val = queue.dequeue();
    return val;
  }
}

export function isEmpty<T>(queue: Queue<T>): boolean {
  const val = queue.peek() === undefined;
  return val;
}
