import { Comparison, getOpposite } from './comparison';
import { ComparisonStore } from './comparison-store';

/** @see https://github.com/leonid-shevtsov/monkeysort/blob/gh-pages/monkey_sort.js */
export class ComparisonMatrix<T> implements ComparisonStore<T> {
	private readonly items: T[];

	/** 2D matrix indexed by `T` storing `Comparison` results. */
	private readonly matrix: Map<T, Map<T, Comparison | null>>;

	constructor (items: T[]) {
		this.items = items;
		this.matrix = new Map();
		for (let a of items) {
			const matrixA = new Map();
			for (let b of items) {
				matrixA.set(b, null);
			}
			matrixA.set(a, Comparison.EQ);
			this.matrix.set(a, matrixA);
		}
	}

	/** Returns `true` if the given indexes are within the matrix. */
	public has (a: T, b: T): boolean {
		return this.matrix.has(a) && this.matrix.get(a)!.has(b);
	}

	/** Return the comparison value (or `null`) at these indexes. */
	public get (a: T, b: T): Comparison | null {
		if (!this.has(a, b)) {
			throw new RangeError('Could not get with these indexes');
		}
		return this.matrix.get(a)!.get(b)!;
	}

	/** Set the comparison value (not `null`) at these indexes. */
	public set (a: T, b: T, value: Comparison): void {
		if (!this.has(a, b)) {
			throw new RangeError('Could not set with these indexes');
		} else if (a === b) {
			throw new SyntaxError('Could not change implied equality');
		}
		this.updateSingle(a, b, value);
	}

	private updateSingle (a: T, b: T, value: Comparison): void {
		const cAB = value;
		const cBA = getOpposite(value);
		this.matrix.get(a)!.set(b, cAB);
		this.matrix.get(b)!.set(a, cBA);
		this.updateTransitive(a, b, cAB);
		this.updateTransitive(b, a, cBA);
	}

	private updateTransitive (a: T, b: T, value: Comparison): void {
		const { items } = this;
		const cAB = value;
		for (let c of items) {
			const cBC = this.get(b, c);
			if (cBC === null) {
				continue;
			}
			const cAC = this.get(a, c);
			if (cAC === null && (cAB === cBC || cAB === Comparison.EQ || cBC === Comparison.EQ)) {
				this.updateSingle(a, c, cAB);
			}
		}
	}
}
