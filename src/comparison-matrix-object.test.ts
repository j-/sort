import { ComparisonMatrixObject } from './comparison-matrix-object';
import { Comparison } from './comparison';

it('constructs with an empty item list', () => {
	const matrix = new ComparisonMatrixObject([]);
	expect(matrix).toBeDefined();
});

it('initializes 1x1 with EQ token', () => {
	const matrix = new ComparisonMatrixObject(['only']);
	expect(matrix.get('only', 'only')).toBe(Comparison.EQ);
});

it('returns `true` when calling `has()`', () => {
	const matrix = new ComparisonMatrixObject(['only']);
	expect(matrix.has('only', 'only')).toBe(true);
});

it('returns `false` when calling `has()`', () => {
	const matrix = new ComparisonMatrixObject(['only']);
	expect(matrix.has('only', 'never')).toBe(false);
});

it('throws when getting nonexistent index', () => {
	const matrix = new ComparisonMatrixObject(['only']);
	expect(() => {
		matrix.get('only', 'never');
	}).toThrow('Could not get with these indexes');
});

it('throws when setting nonexistent index', () => {
	const matrix = new ComparisonMatrixObject(['only']);
	expect(() => {
		matrix.set('only', 'never', Comparison.EQ);
	}).toThrow('Could not set with these indexes');
});

it('throws when trying to set A != A', () => {
	const matrix = new ComparisonMatrixObject(['only']);
	expect(() => {
		matrix.set('only', 'only', Comparison.LT);
	}).toThrow('Could not change implied equality');
});

it('initializes 3x3 with EQ tokens', () => {
	const matrix = new ComparisonMatrixObject(['a', 'b', 'c']);
	// A = A, B = B, C = C
	expect(matrix.get('a', 'a')).toBe(Comparison.EQ);
	expect(matrix.get('b', 'b')).toBe(Comparison.EQ);
	expect(matrix.get('c', 'c')).toBe(Comparison.EQ);
	// All other values are unknown
	expect(matrix.get('a', 'b')).toBe(null);
	expect(matrix.get('a', 'c')).toBe(null);
	expect(matrix.get('b', 'a')).toBe(null);
	expect(matrix.get('b', 'c')).toBe(null);
	expect(matrix.get('c', 'a')).toBe(null);
	expect(matrix.get('c', 'b')).toBe(null);
});

it('can set A = B', () => {
	const matrix = new ComparisonMatrixObject(['a', 'b', 'c']);
	matrix.set('a', 'b', Comparison.EQ);
	expect(matrix.get('a', 'b')).toBe(Comparison.EQ);
});

it('sets B = A when setting A = B', () => {
	const matrix = new ComparisonMatrixObject(['a', 'b', 'c']);
	matrix.set('a', 'b', Comparison.EQ);
	expect(matrix.get('b', 'a')).toBe(Comparison.EQ);
});

it('sets B < A when setting A > B', () => {
	const matrix = new ComparisonMatrixObject(['a', 'b', 'c']);
	matrix.set('a', 'b', Comparison.GT);
	expect(matrix.get('b', 'a')).toBe(Comparison.LT);
});

it('sets C < A when setting A > B > C', () => {
	const matrix = new ComparisonMatrixObject(['a', 'b', 'c']);
	matrix.set('a', 'b', Comparison.GT);
	matrix.set('b', 'c', Comparison.GT);
	expect(matrix.get('c', 'a')).toBe(Comparison.LT);
});

it('sets A > C when setting A > B > C', () => {
	const matrix = new ComparisonMatrixObject(['a', 'b', 'c']);
	matrix.set('a', 'b', Comparison.GT);
	matrix.set('b', 'c', Comparison.GT);
	expect(matrix.get('a', 'c')).toBe(Comparison.GT);
});

it('returns expected results for example scenario', () => {
	const matrix = new ComparisonMatrixObject(['good', 'best', 'better', 'worst', 'worse']);
	matrix.set('good', 'better', Comparison.LT);
	matrix.set('worse', 'better', Comparison.LT);
	matrix.set('worst', 'better', Comparison.LT);
	matrix.set('best', 'better', Comparison.GT);
	matrix.set('worse', 'good', Comparison.LT);
	matrix.set('worst', 'good', Comparison.LT);
	matrix.set('worse', 'worst', Comparison.GT);
	expect(matrix.get('best', 'better')).toBe(Comparison.GT);
	expect(matrix.get('better', 'good')).toBe(Comparison.GT);
	expect(matrix.get('good', 'worse')).toBe(Comparison.GT);
	expect(matrix.get('worse', 'worst')).toBe(Comparison.GT);
});

it('returns expected results for example "don\'t care" scenario', () => {
	const matrix = new ComparisonMatrixObject(['good', 'best', 'better', 'worst', 'worse']);
	matrix.set('good', 'better', Comparison.EQ);
	matrix.set('worse', 'better', Comparison.EQ);
	matrix.set('best', 'better', Comparison.EQ);
	matrix.set('worst', 'better', Comparison.EQ);
	matrix.set('good', 'best', Comparison.EQ);
	expect(matrix.get('best', 'good')).toBe(Comparison.EQ);
	expect(matrix.get('good', 'better')).toBe(Comparison.EQ);
	expect(matrix.get('better', 'worst')).toBe(Comparison.EQ);
	expect(matrix.get('worst', 'worse')).toBe(Comparison.EQ);
});
