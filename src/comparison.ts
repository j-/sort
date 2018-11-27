export enum Comparison {
	/** Less than */
	LT = -1,
	/** Equal to */
	EQ = 0,
	/** Greater than */
	GT = 1,
}

/** Returns the opposite comparison to the one provided. */
export const getOpposite = (input: Comparison) => (
	input === Comparison.EQ ? Comparison.EQ :
	input === Comparison.LT ? Comparison.GT : Comparison.LT
);
