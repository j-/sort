import { Comparison } from './comparison';
import { ComparisonMatrix } from './comparison-matrix';

export class ComparisonMatrixMap<T> extends ComparisonMatrix<T> {
	private readonly items: T[];

	/** 2D matrix indexed by `T` storing `Comparison` results. */
	private readonly matrix: Map<T, Map<T, Comparison | null>>;

	constructor (items: T[]) {
		super();
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

	protected hasValue (a: T, b: T): boolean {
		return this.matrix.has(a) && this.matrix.get(a)!.has(b);
	}

	protected getValue (a: T, b: T): Comparison | null {
		return this.matrix.get(a)!.get(b)!;
	}

	protected setValue (a: T, b: T, value: Comparison): void {
		this.matrix.get(a)!.set(b, value);
	}

	protected getItems (): T[] {
		return this.items;
	}
}
