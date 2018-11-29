import { getOpposite, toggleComparison, Comparison } from './comparison';

describe('getOpposite()', () => {
	it('returns EQ when given EQ', () => {
		expect(getOpposite(Comparison.EQ)).toBe(Comparison.EQ);
	});

	it('returns GT when given LT', () => {
		expect(getOpposite(Comparison.LT)).toBe(Comparison.GT);
	});

	it('returns LT when given GT', () => {
		expect(getOpposite(Comparison.GT)).toBe(Comparison.LT);
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
