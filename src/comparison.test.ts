import { getOpposite, Comparison } from './comparison';

it('returns EQ when given EQ', () => {
	expect(getOpposite(Comparison.EQ)).toBe(Comparison.EQ);
});

it('returns GT when given LT', () => {
	expect(getOpposite(Comparison.LT)).toBe(Comparison.GT);
});

it('returns LT when given GT', () => {
	expect(getOpposite(Comparison.GT)).toBe(Comparison.LT);
});
