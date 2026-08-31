import assert from 'node:assert/strict';
import test from 'node:test';
import { visibleReports } from './reports.js';

test('hides archived reports', () => {
  assert.deepEqual(visibleReports([
    { id: 1, archived: false },
    { id: 2, archived: true },
  ]), [{ id: 1, archived: false }]);
});
