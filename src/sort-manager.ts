import { ComparisonMatrix } from './comparison-matrix';
import { Comparison } from './comparison';

export abstract class SortManager<T> {
	protected readonly matrix: ComparisonMatrix<T>;
	public lastA: T;
	public lastB: T;

	constructor (matrix: ComparisonMatrix<T>) {
		this.matrix = matrix;
	}

	public abstract sort (): T[] | null;

	protected getItems (): T[] {
		return [...this.matrix.getItems()];
	}

	protected compare (a: T, b: T): Comparison {
		this.lastA = a;
		this.lastB = b;
		const result = this.matrix.get(a, b);
		if (result === null) {
			throw new Error('Comparison not available');
		}
		return result;
	}

	protected lt (a: T, b: T): boolean {
		return this.compare(a, b) === Comparison.LT;
	}

	protected gt (a: T, b: T): boolean {
		return this.compare(a, b) === Comparison.GT;
	}

	protected eq (a: T, b: T): boolean {
		return this.compare(a, b) === Comparison.EQ;
	}
}
