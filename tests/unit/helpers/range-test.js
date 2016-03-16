import { range } from '../../../helpers/range';
import { module, test } from 'qunit';

module('Unit | Helper | range');

test('should return true if index === currentIndex || index === currentIndex - 1 || index === currentIndex + 1', function(assert) {
  assert.ok(range([1, 2, 1]));
  assert.ok(range([2, 2, 1]));
  assert.ok(range([3, 2, 1]));
});

test('should return false if not index === currentIndex || index === currentIndex - 1 || index === currentIndex + 1', function(assert) {
  assert.notOk(range([0, 2, 1]), "0 is not in range of 2 + 1");
  assert.notOk(range([4, 2, 1]), "0 is not range of 2 + 1");
  assert.notOk(range([10, 2, 1]), "10 is not range of 2 + 1");
  assert.notOk(range([10, 2, 2]), "10 is not range of 2 + 2");
});

test('should return false if not index === currentIndex || index <== currentIndex - 1 || index >== currentIndex + 1', function(assert) {
  assert.ok(range([0, 2, 2]));
  assert.ok(range([3, 2, 2]));
  assert.ok(range([4, 2, 2]));
  assert.ok(range([1, 2, 2]));
  assert.ok(range([10, 2, 20]), "10 should in range of 2 + 20");
});