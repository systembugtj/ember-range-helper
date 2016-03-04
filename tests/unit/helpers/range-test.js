import { range } from '../../../helpers/range';
import { module, test } from 'qunit';

module('Unit | Helper | range');

test('should return true if index === currentIndex || index === currentIndex - 1 || index === currentIndex + 1', function(assert) {
  assert.ok(range([1, 2, 1]));
  assert.ok(range([2, 2, 1]));
  assert.ok(range([3, 2, 1]));
});
test('should return false if not index === currentIndex || index === currentIndex - 1 || index === currentIndex + 1', function(assert) {
  assert.notOk(range([0, 2, 1]));
  assert.notOk(range([4, 2, 1]));
  assert.notOk(range([10, 2, 1]));
  assert.notOk(range([10, 2, 2]));
});