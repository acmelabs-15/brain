import assert from 'node:assert/strict';
import test from 'node:test';
import { paginate } from './pagination.js';

test('returns the second page for a one-based page number', () => {
  assert.deepEqual(paginate(['a', 'b', 'c', 'd', 'e'], 2, 2), ['c', 'd']);
});
