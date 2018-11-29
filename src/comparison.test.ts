import { invertComparison, toggleComparison, Comparison } from './comparison';

describe('invertComparison()', () => {
	it('returns EQ when given EQ', () => {
		expect(invertComparison(Comparison.EQ)).toBe(Comparison.EQ);
	});

	it('returns GT when given LT', () => {
		expect(invertComparison(Comparison.LT)).toBe(Comparison.GT);
	});

	it('returns LT when given GT', () => {
		expect(invertComparison(Comparison.GT)).toBe(Comparison.LT);
	});
});

describe('toggleComparison()', () => {
	it('returns LT when given null', () => {
		expect(toggleComparison(null)).toBe(Comparison.LT);
	});

	it('returns EQ when given LT', () => {
		expect(toggleComparison(Comparison.LT)).toBe(Comparison.EQ);
	});

	it('returns GT when given EQ', () => {
		expect(toggleComparison(Comparison.EQ)).toBe(Comparison.GT);
	});

	it('returns null when given GT', () => {
		expect(toggleComparison(Comparison.GT)).toBe(null);
	});
});
