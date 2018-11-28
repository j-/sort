import { ComparisonMatrix } from './comparison-matrix';
import { Comparison } from './comparison';

it('constructs with an empty item list', () => {
	const matrix = new ComparisonMatrix([]);
	expect(matrix).toBeDefined();
});

it('initializes 1x1 with EQ token', () => {
	const matrix = new ComparisonMatrix(['only']);
	expect(matrix.get('only', 'only')).toBe(Comparison.EQ);
});

it('returns `true` when calling `has()`', () => {
	const matrix = new ComparisonMatrix(['only']);
	expect(matrix.has('only', 'only')).toBe(true);
});

it('returns `false` when calling `has()`', () => {
	const matrix = new ComparisonMatrix(['only']);
	expect(matrix.has('only', 'never')).toBe(false);
});

it('throws when getting nonexistent index', () => {
	const matrix = new ComparisonMatrix(['only']);
	expect(() => {
		matrix.get('only', 'never');
	}).toThrow('Could not get with these indexes');
});

it('throws when setting nonexistent index', () => {
	const matrix = new ComparisonMatrix(['only']);
	expect(() => {
		matrix.set('only', 'never', Comparison.EQ);
	}).toThrow('Could not set with these indexes');
});

it('throws when trying to set A != A', () => {
	const matrix = new ComparisonMatrix(['only']);
	expect(() => {
		matrix.set('only', 'only', Comparison.LT);
	}).toThrow('Could not change implied equality');
});

it('initializes 3x3 with EQ tokens', () => {
	const matrix = new ComparisonMatrix(['a', 'b', 'c']);
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
