import { Comparison, getOpposite } from './comparison';

/** @see https://github.com/leonid-shevtsov/monkeysort/blob/gh-pages/monkey_sort.js */
export abstract class ComparisonMatrix<T> {
	private readonly items: T[];

	protected abstract hasValue (a: T, b: T): boolean;
	protected abstract getValue (a: T, b: T): Comparison | null;
	protected abstract setValue (a: T, b: T, value: Comparison): void;

	constructor (items: T[]) {
		this.items = items;
	}

	/** Returns `true` if the given indexes are within the matrix. */
	public has (a: T, b: T): boolean {
		return this.hasValue(a, b);
	}

	/** Return the comparison value (or `null`) at these indexes. */
	public get (a: T, b: T): Comparison | null {
		if (!this.hasValue(a, b)) {
			throw new RangeError('Could not get with these indexes');
		}
		return this.getValue(a, b);
	}

	/** Set the comparison value (not `null`) at these indexes. */
	public set (a: T, b: T, value: Comparison): void {
		if (!this.hasValue(a, b)) {
			throw new RangeError('Could not set with these indexes');
		} else if (a === b) {
			throw new SyntaxError('Could not change implied equality');
		}
		this.updateSingle(a, b, value);
	}

	/** Returns the original list to sort. */
	public getItems (): T[] {
		return this.items;
	}

	private updateSingle (a: T, b: T, cAB: Comparison): void {
		const cBA = getOpposite(cAB);
		this.setValue(a, b, cAB);
		this.setValue(b, a, cBA);
		this.updateTransitive(a, b, cAB);
		this.updateTransitive(b, a, cBA);
	}

	private updateTransitive (a: T, b: T, cAB: Comparison): void {
		const items = this.getItems();
		for (let c of items) {
			const cBC = this.getValue(b, c);
			if (cBC === null) {
				continue;
			}
			const cAC = this.getValue(a, c);
			if (cAC === null && (cAB === cBC || cAB === Comparison.EQ || cBC === Comparison.EQ)) {
				this.updateSingle(a, c, cAB);
			}
		}
	}
}
