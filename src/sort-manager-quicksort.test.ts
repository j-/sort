import { SortManagerQuicksort } from './sort-manager-quicksort';
import { ComparisonMatrixMap } from './comparison-matrix-map';
import { Comparison } from './comparison';

it('stops when comparison matrix is incomplete', () => {
	const items = ['a', 'b'];
	const matrix = new ComparisonMatrixMap(items);
	const manager = new SortManagerQuicksort(matrix);
	const result = manager.sort();
	expect(result).toBeNull();
	expect(manager.lastA).toBe('b');
	expect(manager.lastB).toBe('a');
});

it('returns when comparison matrix is complete', () => {
	const items = ['c', 'a', 'b'];
	const matrix = new ComparisonMatrixMap(items);
	matrix.set('a', 'b', Comparison.GT);
	matrix.set('b', 'c', Comparison.GT);
	const manager = new SortManagerQuicksort(matrix);
	const result = manager.sort();
	expect(result).toEqual(['a', 'b', 'c']);
});
