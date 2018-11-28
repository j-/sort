import { Comparison } from './comparison';
import { ComparisonMatrix } from './comparison-matrix';

export class ComparisonMatrixObject extends ComparisonMatrix<string> {
	private readonly grid: Record<string, Record<string, Comparison | null>>;

	constructor (items: string[]) {
		super(items);
		this.grid = {};
		for (let a of items) {
			const objA = {};
			for (let b of items) {
				objA[b] = null;
			}
			objA[a] = Comparison.EQ;
			this.grid[a] = objA;
		}
	}

	protected hasValue (a: string, b: string): boolean {
		return (
			Object.keys(this.grid).indexOf(a) > -1 &&
			Object.keys(this.grid[a]).indexOf(b) > -1
		);
	}

	protected getValue (a: string, b: string): Comparison | null {
		return this.grid[a][b];
	}

	protected setValue (a: string, b: string, value: Comparison): void {
		this.grid[a][b] = value;
	}

	public getData () {
		return this.grid;
	}
}
