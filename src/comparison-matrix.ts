import { Comparison, getOpposite } from './comparison';

/** @see https://github.com/leonid-shevtsov/monkeysort/blob/gh-pages/monkey_sort.js */
export class ComparisonMatrix<T> {
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
		}
		this.updateSingle(a, b, value);
		this.updateSingle(b, a, getOpposite(value));
	}

	private updateSingle (a: T, b: T, value: Comparison | null): void {
		this.matrix.get(a)!.set(b, value);
		this.updateTransitive(a, b);
	}

	private updateTransitive (a: T, b: T): void {
		const { items } = this;
		if (this.get(a, b) === Comparison.EQ) {
			for (let c of items) {
				if (this.get(a, c) === null) {
					this.updateSingle(a, c, this.get(b, c));
				}
			}
		} else {
			for (let c of items) {
				if (this.get(a, c) === null && ((this.get(a, b) === this.get(b, c)) || (this.get(b, c) === Comparison.EQ))) {
					this.updateSingle(a, c, this.get(a, b));
				}
			}
		}
	}
}
